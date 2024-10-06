// ignore_for_file: avoid_print

import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:mobx/mobx.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:sistema_medico_app/auth/auth.service.dart';
import 'package:sistema_medico_app/medico/medico.model.dart';

part 'auth.store.g.dart';

class AuthStore = _AuthStoreBase with _$AuthStore;

abstract class _AuthStoreBase with Store {
  final AuthService _authService = AuthService();

  @observable
  bool isLoading = false;

  @observable
  String? email;

  @observable
  String? password;

  @observable
  bool showPassword = false;

  @observable
  bool isMedico = false;

  @observable
  Medico? user;

  @action
  void setEmail(String value) => email = value;

  @action
  void setPassword(String value) => password = value;

  @action
  void setIsMedico(bool value) => isMedico = value;

  @action
  void toggleIsLoading() => isLoading = !isLoading;

  @action
  void toggleShowPassword() => showPassword = !showPassword;

  @action
  void showToast(String message) {
    Fluttertoast.showToast(
      msg: message,
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.TOP, // posição do toast
      backgroundColor: Colors.black.withOpacity(0.7),
      textColor: Colors.white,
      fontSize: 16.0,
    );
  }

  @action
  Future saveUserData() async {
    if (user == null) return;

    // Salva os dados do usuário no SharedPreferences
    // para manter o usuário logado
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('userId', user!.id);
    await prefs.setString('nome', user!.nome);
    await prefs.setString('cpf', user!.cpf);
    await prefs.setString('dataNascimento', user!.dataNascimento);
    await prefs.setString('endereco', user!.endereco);
    await prefs.setString('observacoes', user!.observacoes);
    await prefs.setBool('sexo', user!.sexo);
    await prefs.setString('email', user!.email);
    await prefs.setString('token', user!.token);
    await prefs.setString('crm', user!.crm);
    await prefs.setString('especialidade', user!.especialidade);
    await prefs.setInt('userId', user!.userId);
  }

  @action
  Future loadUserData() async {
    // retorna os dados do usuário salvos no SharedPreferences
    final prefs = await SharedPreferences.getInstance();
    if (prefs.containsKey('token')) {
      user = Medico(
        id: prefs.getInt('userId')!,
        nome: prefs.getString('nome')!,
        cpf: prefs.getString('cpf')!,
        dataNascimento: prefs.getString('dataNascimento')!,
        endereco: prefs.getString('endereco')!,
        observacoes: prefs.getString('observacoes')!,
        sexo: prefs.getBool('sexo')!,
        email: prefs.getString('email')!,
        token: prefs.getString('token')!,
        crm: prefs.getString('crm')!,
        especialidade: prefs.getString('especialidade')!,
        userId: prefs.getInt('userId')!,
      );
    }
  }

  @action
  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.clear(); // Limpando os dados
    user = null; // Removendo o usuário da memória
    showToast('Logout realizado com sucesso');
  }

  @action
  Future login(String email, String password, bool isMedico) async {
    toggleIsLoading();
    final response = await _authService.login(email, password, isMedico);
    if (response.containsKey('error')) {
      showToast(response['message']);
      toggleIsLoading();
      return;
    }

    final data = response['data'];
    final token = data['token'];
    final userData = data['user'];
    final medicoData = userData['Medico'];

    user = Medico.fromJson(userData, medicoData, token);
    toggleIsLoading();

    return true;
  }
}

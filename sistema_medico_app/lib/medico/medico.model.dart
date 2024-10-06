import 'package:sistema_medico_app/user/user.model.dart';

class Medico extends User {
  final String crm;
  final String especialidade;
  final int userId;

  Medico({
    required this.crm,
    required this.especialidade,
    required this.userId,
    required super.id,
    required super.nome,
    required super.cpf,
    required super.dataNascimento,
    required super.endereco,
    required super.observacoes,
    required super.sexo,
    required super.email,
    required super.token,
  });

  factory Medico.fromJson(Map<String, dynamic> userData,
      Map<String, dynamic> medicoData, String token) {
    return Medico(
      crm: medicoData['crm'],
      especialidade: medicoData['especialidade'],
      userId: userData['id'],
      id: userData['id'],
      nome: userData['nome'],
      cpf: userData['cpf'],
      dataNascimento: userData['dataNascimento'],
      endereco: userData['endereco'],
      observacoes: userData['observacoes'],
      sexo: userData['sexo'],
      email: userData['email'],
      token: token,
    );
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'nome': nome,
      'cpf': cpf,
      'dataNascimento': dataNascimento,
      'endereco': endereco,
      'observacoes': observacoes,
      'sexo': sexo,
      'email': email,
      'crm': crm,
      'especialidade': especialidade,
      'userId': userId,
      'token': token,
    };
  }
}

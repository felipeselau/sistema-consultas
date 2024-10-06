// ignore_for_file: use_build_context_synchronously

import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:provider/provider.dart';
import 'package:sistema_medico_app/auth/auth.store.dart';

class ProfilePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final authStore = Provider.of<AuthStore>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Perfil'),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: () async {
              await authStore.logout(); // Fazendo logout
              Navigator.pushReplacementNamed(
                  context, '/login'); // Voltando para a página de login
            },
          ),
        ],
      ),
      body: Observer(
        builder: (_) {
          final user = authStore.user;

          if (user == null) {
            return const Center(child: CircularProgressIndicator());
          }

          return Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("Nome: ${user.nome}", style: TextStyle(fontSize: 20)),
                const SizedBox(height: 10),
                Text("Email: ${user.email}"),
                const SizedBox(height: 10),
                Text("Endereço: ${user.endereco}"),
                const SizedBox(height: 10),
                Text("CPF: ${user.cpf}"),
                const SizedBox(height: 10),
                Text("Observações: ${user.observacoes}"),
                const SizedBox(height: 10),
                Text("Sexo: ${user.sexo ? 'Masculino' : 'Feminino'}"),
                const SizedBox(height: 10),
                ElevatedButton(
                    onPressed: () {
                      Navigator.pushNamed(context, '/home');
                    },
                    child: const Text('Página Principal'))
              ],
            ),
          );
        },
      ),
    );
  }
}

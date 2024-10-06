import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:provider/provider.dart';
import 'package:sistema_medico_app/auth/auth.store.dart';

class LoginPage extends StatefulWidget {
  LoginPage({super.key});

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final authStore = Provider.of<AuthStore>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Login'),
        bottom: TabBar(
          controller: _tabController,
          tabs: const [
            Tab(text: 'Sou Médico'),
            Tab(text: 'Sou Paciente'),
          ],
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          // Login para médicos
          _buildLoginForm(authStore, context, true),
          // Login para pacientes
          _buildLoginForm(authStore, context, false),
        ],
      ),
    );
  }

  Widget _buildLoginForm(
      AuthStore authStore, BuildContext context, bool isMedico) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: emailController,
              decoration: const InputDecoration(labelText: 'Email'),
              keyboardType: TextInputType.emailAddress,
            ),
            TextField(
              controller: passwordController,
              decoration: const InputDecoration(
                labelText: 'Senha',
              ),
              obscureText: true,
            ),
            const SizedBox(height: 20),
            Observer(
              builder: (_) => ElevatedButton(
                onPressed: authStore.isLoading
                    ? null
                    : () async {
                        final login = await authStore.login(
                          emailController.text,
                          passwordController.text,
                          isMedico, // Passando o tipo de usuário
                        );
                        if (login) {
                          Navigator.pushNamed(context, '/home');
                        }
                      },
                child: authStore.isLoading
                    ? const CircularProgressIndicator(color: Colors.white)
                    : const Text('Login'),
              ),
            ),
            const SizedBox(height: 20),
            TextButton(
              onPressed: () {
                // Aqui você pode navegar para a tela de registro
                Navigator.pushNamed(context, '/register');
              },
              child: const Text(
                'Ainda não possui conta? Faça o registro',
                style: TextStyle(color: Colors.blue),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

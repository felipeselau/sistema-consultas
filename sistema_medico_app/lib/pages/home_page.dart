import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:provider/provider.dart';
import 'package:sistema_medico_app/auth/auth.store.dart';
import 'package:sistema_medico_app/widgets/profile.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController =
        TabController(length: 2, vsync: this); // Duas abas: Perfil e Consultas
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final authStore = Provider.of<AuthStore>(context);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Home'),
        bottom: TabBar(
          controller: _tabController,
          tabs: const [
            Tab(text: 'Consultas'),
            Tab(text: 'Perfil'),
          ],
        ),
      ),
      body: Observer(builder: (_) {
        if (authStore.user == null) {
          // Se não houver um usuário logado, redireciona para o login
          Navigator.pushReplacementNamed(context, '/login');
          return Container(); // Placeholder
        }

        return TabBarView(
          controller: _tabController,
          children: [
            // Placeholder para a lista de consultas (a ser implementada)
            const Center(child: Text('Lista de Consultas')),
            // Página de perfil já existente
            Profile(),
          ],
        );
      }),
    );
  }
}

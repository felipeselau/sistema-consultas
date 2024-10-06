import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:sistema_medico_app/auth/auth.store.dart';
import 'package:sistema_medico_app/pages/hero_page.dart';
import 'package:sistema_medico_app/pages/home_page.dart';
import 'package:sistema_medico_app/pages/login_page.dart';
import 'package:sistema_medico_app/pages/profile_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  runApp(MultiProvider(
    providers: [Provider<AuthStore>(create: (_) => AuthStore())],
    child: const MyApp(),
  ));
}

class AppStyle {
  static const Color primaryColor = Color(0xFF2F27CE);
  static const Color secondaryColor = Color(0xFFDDDBFF);
  static const Color alternateColor = Color(0xFFFBFBFE);
  static const Color accent1Color = Color(0xFF443DFF);
  static const Color accent2Color = Color(0xFF5F59E9);
  static const Color accent3Color = Color(0xFF817CFF);
  static const Color primaryTextColor = Color(0xFF050316);

  static const TextStyle displayMediumStyle = TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: alternateColor,
  );

  static const TextStyle titleMediumStyle = TextStyle(
    fontSize: 18,
    fontWeight: FontWeight.w300,
    color: alternateColor,
  );

  static const TextStyle titleSmallStyle = TextStyle(
    fontSize: 16,
    fontWeight: FontWeight.w500,
    color: alternateColor,
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'consulta.tech',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const HeroPageWidget(),
        '/login': (context) => LoginPage(),
        '/home': (context) => HomePage(),
      },
    );
  }
}

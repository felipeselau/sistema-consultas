// ignore_for_file: unused_local_variable

import 'package:flutter/material.dart';
import 'package:sistema_medico_app/main.dart';

class HeroPageWidget extends StatefulWidget {
  const HeroPageWidget({super.key});

  @override
  State<HeroPageWidget> createState() => _HeroPageWidgetState();
}

class _HeroPageWidgetState extends State<HeroPageWidget> {
  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    // Additional initialization if needed
  }

  @override
  void dispose() {
    super.dispose();
    // Dispose resources if needed
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => FocusScope.of(context).unfocus(),
      child: Scaffold(
        key: scaffoldKey,
        body: SizedBox(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          child: Stack(
            children: [
              Positioned.fill(
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: Image.asset(
                    'lib/assets/doctor-hero.png',
                    fit: BoxFit.cover,
                  ),
                ),
              ),
              Align(
                alignment: AlignmentDirectional.center,
                child: Padding(
                  padding: const EdgeInsetsDirectional.fromSTEB(24, 0, 24, 32),
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      const Align(
                        alignment: AlignmentDirectional(0, -1),
                        child: Text(
                          'consulta.tech',
                          style: AppStyle.displayMediumStyle,
                        ),
                      ),
                      const Align(
                        alignment: AlignmentDirectional(0, 0),
                        child: Padding(
                          padding:
                              EdgeInsetsDirectional.fromSTEB(20, 12, 20, 0),
                          child: Text(
                            'Consulte seus agendamentos na palma da mão',
                            textAlign: TextAlign.center,
                            style: AppStyle.titleMediumStyle,
                          ),
                        ),
                      ),
                      Padding(
                        padding:
                            const EdgeInsetsDirectional.fromSTEB(0, 32, 0, 0),
                        child: ElevatedButton(
                          onPressed: () {
                            Navigator.pushNamed(context, '/login');
                          },
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppStyle.primaryColor,
                            padding: const EdgeInsetsDirectional.fromSTEB(
                                16, 0, 16, 0),
                            minimumSize:
                                Size(MediaQuery.of(context).size.width, 64),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(24),
                            ),
                            elevation: 0,
                          ),
                          child: const Text('Entrar',
                              style: AppStyle.titleSmallStyle),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

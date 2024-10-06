import 'package:dio/dio.dart';

class AuthService {
  final Dio _dio = Dio();
  final apiURL = "http://10.0.2.2:3000";
  Future<Map<String, dynamic>> login(
      String email, String password, bool isMedico) async {
    try {
      final response = await _dio.post(
        '$apiURL/auth/${isMedico ? 'medico' : 'paciente'}/login',
        data: {
          'email': email,
          'senha': password,
        },
      );
      // Retorna a resposta da API
      return response.data;
    } on DioException catch (e) {
      return {
        'error': true,
        'message': e.response?.data['message'] ?? 'Erro ao realizar login',
      };
    }
  }
}

class User {
  final int id;
  final String nome;
  final String cpf;
  final String dataNascimento;
  final String endereco;
  final String observacoes;
  final bool sexo;
  final String email;
  final String token;

  User({
    required this.id,
    required this.nome,
    required this.cpf,
    required this.dataNascimento,
    required this.endereco,
    required this.observacoes,
    required this.sexo,
    required this.email,
    required this.token,
  });

  factory User.fromJson(Map<String, dynamic> json, String token) {
    return User(
      id: json['id'],
      nome: json['nome'],
      cpf: json['cpf'],
      dataNascimento: json['dataNascimento'],
      endereco: json['endereco'],
      observacoes: json['observacoes'],
      sexo: json['sexo'],
      email: json['email'],
      token: token,
    );
  }

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
    };
  }
}

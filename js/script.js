/* Alunos: Marina e Rômulo 
Atividade de Login e Senha com While, Prompt e if else*/

var login = prompt ("Digite o login");
var senha = prompt ("Digite a senha");
var x = 0;

if (login == "Rômulo" && senha == "123")
    {
        document.write ("Acesso Permitido");
    }
else
{
    while (x < 3 && login != "Rômulo" || senha != "123")
    {
        alert ("Login ou senha errados. Você tem mais 2 tentativas.");
        var login = prompt ("Digite o login");
        var senha = prompt ("Digite a senha");
        x++;
                if (x=2 && login != "Rômulo" || senha != "123")
                {
                    alert ("Login ou senha errados. A chapa tá esquentando para você. Você tem mais 1 tentativa.");
                    var login = prompt ("Digite o login");
                    var senha = prompt ("Digite a senha");
                    x++;
                }
                else (x=3 && login != "Rômulo" || senha != "123")
                {
                    alert ("Falha no login. A casa caiu para você. Acabaram as suas tentativas.");
                    document.write ("Acesso Negado");
                    break;
                }
    }
}
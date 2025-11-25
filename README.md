### Descrição

Prova CN2 , acabei tendo que reverter para runtime local, devido aos recursos necessários para estrutura do BE escolhido.

Embora o blob storage e integração com azure não incorrerem em problemas em nenhum dos ambientes , o google e os serviçoes atrelados a serviçes workers/auth dos mesmos , injeção de script em runtime no render ou utilização de estratégia de Secret Manager API para contornarmos são todas opções pagas. 

O pages do Github foi brevemente configurado, mas não vai resolver as requisições destinadas ao google e nem o sync pois ele requer que a conexão com os serviçoes google esteja ativa. 

Solução: rode o projeto localmente 

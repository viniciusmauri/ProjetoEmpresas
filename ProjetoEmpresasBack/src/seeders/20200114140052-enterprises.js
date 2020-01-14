'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('enterprises', [{
      name: 'Cruzeiro Esporte Clube',
      description: 'O Cruzeiro Esporte Clube é uma associação polidesportiva brasileira, com sede em Belo Horizonte, Minas Gerais. É considerado um dos maiores clubes de futebol de Minas Gerais e do Brasil. Fundado em 1921 com o nome de Società Sportiva Palestra Italia, foi rebatizado para seu nome atual em 1942 - em referência ao Cruzeiro do Sul - por imposição do governo federal à época proibiu o uso no país de quaisquer símbolos de Alemanha, Itália e Japão, nações inimigas do Brasil no contexto da Segunda Guerra Mundial. É um dos clubes mais populares do Brasil. Tetra campeão brasileiro, Hexa-campeão da copa do Brasil, Bicampeão da Copa Libertadores da América, Melhor time brasileiro do século XX',
      contry: 'Brasil',
      enterprise_types: 'sports',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Nike',
      description: 'Nike, Inc. é uma empresa estadunidense de calçados, roupas, e acessórios fundada em 1972 por Bill Bowerman e Phillip Knight (atual presidente da empresa). A sua sede fica em Beaverton, no estado de Oregon, nos Estados Unidos. É a marca de roupas mais valiosa do mundo, segundo o ranking BrandZ da consultoria Millward Brown, avaliada em 37.472 bilhões de dólares.',
      contry: 'Estados Unidos',
      enterprise_types: 'clothing',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Samsung',
      description: 'Samsung Electronics Company Limited (Samsung Electronics Co., Ltd.),Simplesmente Samsung é uma corporação transnacional sul-coreana que atua em diversos ramos da área de tecnologia da informação com sede em Seul, Coreia do Sul. Em 2017, o faturamento da Samsung foi de USD 223,36 bilhões, correspondente a 19,6% do PIB da Coreia do Sul.',
      contry: 'Coréia do sul',
      enterprise_types: 'technology',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Blizzard Entertainment',
      description: 'Blizzard Entertainment é uma editora e desenvolvedora de videojogos americana tendo sua sede na cidade de Irvine, California. A companhia foi fundada em 8 de fevereiro de 1991, sob o nome de Silicon & Synapse por Michael Morhaime, Frank Pearce e Allen Adham. Originalmente, a empresa se concentrava em criar jogos para outros estúdios antes de começar o desenvolvimento do seu próprio software no ano de 1993, com jogos como Blackthorne, The Death and Return of Superman, Rock n Roll Racing e The Lost Vikings. Em 1994, a empresa se tornou a Chaos Studios, porém mudou de nome para Blizzard Entertainment, depois de ser adquirida pela distribuidora Davidson & Associates.',
      contry: 'Estados Unidos',
      enterprise_types: 'games',
      created_at: new Date(),
      updated_at: new Date()
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('enterprises', null, {});
  }
};

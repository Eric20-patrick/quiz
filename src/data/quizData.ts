import { Quiz } from '@/types/quiz';
import capaGt from '../components/fotos/GameOfThrones/capa.jpg';
import capaTT from '../components/fotos/TheBigBang/capa.jpeg';
import capaBd from '../components/fotos/BreakingBad/capa.png';
//GOT
import lema from '../components/fotos/GameOfThrones/lema.png';
import escudo from '../components/fotos/GameOfThrones/escudos.jpeg';
import familia from '../components/fotos/GameOfThrones/familia.jpg';
import joffrey from '../components/fotos/GameOfThrones/joffrey.jpg';
import correntes from '../components/fotos/GameOfThrones/correntes.jpg';
import espada from '../components/fotos/GameOfThrones/espada.jpeg';
import louco from '../components/fotos/GameOfThrones/louco.jpg';
import jhon from '../components/fotos/GameOfThrones/jhon.jpg';
import morto from '../components/fotos/GameOfThrones/morto.jpg';
import hodor from '../components/fotos/GameOfThrones/hodor.webp';
// TBBT
import proficao from '../components/fotos/TheBigBang/sheldon.jpeg';
import penny from '../components/fotos/TheBigBang/penny.jpeg';
import bazinga from '../components/fotos/TheBigBang/bazinga.jpeg';
import berny from '../components/fotos/TheBigBang/bernadete.jpg';
import howard from '../components/fotos/TheBigBang/howard.jpeg';
import jogo from '../components/fotos/TheBigBang/jogo.jpg';
import trabalho from '../components/fotos/TheBigBang/trabalho.jpg';
import mae from '../components/fotos/TheBigBang/mae.webp';
import publico from '../components/fotos/TheBigBang/publico.jpg';
import lingua from '../components/fotos/TheBigBang/lingua.webp';
// BB
import walter from '../components/fotos/BreakingBad/walter.jpg';
import cristal from '../components/fotos/BreakingBad/cristal.jpg';
import ego from '../components/fotos/BreakingBad/ego.jpg';
import produtor from '../components/fotos/BreakingBad/produtor.jpg';
import empresa from '../components/fotos/BreakingBad/empresa.jpg';
import doente from '../components/fotos/BreakingBad/doente.png';
import acido from '../components/fotos/BreakingBad/acido.jpg';
import cartel from '../components/fotos/BreakingBad/cartel.webp';
import saul from '../components/fotos/BreakingBad/saul.jpg';
import jr from '../components/fotos/BreakingBad/jr.avif';

export const quizzes: Quiz[] = [
  {
    id: 'game-of-thrones',
    title: 'Game of Thrones',
    description: 'O quanto você conhece sobre o mundo de Westeros e além',
    image: capaGt,
    questions: [
      {
        id: 1,
        text: 'Qual é o lema da Casa Stark?',
        options: [
          'O inverno está chegando',
          'Ouça meu rugido',
          'Família, Dever, Honra',
          'Fogo e Sangue',
        ],
        correctAnswer: 0,
        difficulty: 'fácil',
        image: lema,
      },
      {
        id: 2,
        text: 'Qual animal é o símbolo da Casa Baratheon?',
        options: ['Leão', 'Lobo', 'Veado', 'Águia'],
        correctAnswer: 2,
        difficulty: 'fácil',
        image: escudo,
      },
      {
        id: 3,
        text: "Quem disse a frase: 'Um Lannister sempre paga suas dívidas'?",
        options: [
          'Tywin Lannister',
          'Jaime Lannister',
          'Cersei Lannister',
          'Tyrion Lannister',
        ],
        correctAnswer: 3,
        difficulty: 'fácil',
        image: familia,
      },
      {
        id: 4,
        text: 'Quem matou o Rei Joffrey Baratheon?',
        options: [
          'Tyrion Lannister',
          'Olenna Tyrell',
          'Sansa Stark',
          'Cersei Lannister',
        ],
        correctAnswer: 1,
        difficulty: 'médio',
        image: joffrey,
      },

      {
        id: 5,
        text: "Qual personagem foi chamado de 'Quebrador de Correntes'?",
        options: [
          'Cersei Lannister',
          'Jon Snow',
          'Daenerys Targaryen',
          'Tyrion Lannister',
        ],
        correctAnswer: 2,
        difficulty: 'médio',
        image: correntes,
      },

      {
        id: 6,
        text: 'Qual o nome da espada de Jon Snow?',
        options: ['Garra Longa', 'Agulha', 'Gelo', 'Lamento da Viúva'],
        correctAnswer: 0,
        difficulty: 'médio',
        image: espada,
      },
      {
        id: 7,
        text: 'Quem foi o Rei Louco?',
        options: [
          'Aerys Targaryen',
          'Rhaegar Targaryen',
          'Viserys Targaryen',
          'Robert Baratheon',
        ],
        correctAnswer: 0,
        difficulty: 'médio',
        image: louco,
      },
      {
        id: 8,
        text: 'Qual o verdadeiro nome de Jon Snow?',
        options: [
          'Aegon Targaryen',
          'Rhaegar Targaryen',
          'Jaehaerys Targaryen',
          'Aemon Targaryen',
        ],
        correctAnswer: 0,
        difficulty: 'difícil',
        image: jhon,
      },

      {
        id: 9,
        text: 'Qual personagem ressuscitou Jon Snow?',
        options: [
          'Bran Stark',
          'Melisandre',
          'O Rei da Noite',
          'Os Filhos da Floresta',
        ],
        correctAnswer: 1,
        difficulty: 'difícil',
        image: morto,
      },
      {
        id: 10,
        text: 'Qual o nome do gigante que viajava com Bran Stark?',
        options: ['Wun Wun', 'Hodor', 'Tormund', 'Mag o Poderoso'],
        correctAnswer: 1,
        difficulty: 'difícil',
        image: hodor,
      },
    ],
  },
  {
    id: 'the-big-bang-theory',
    title: 'The Big Bang Theory',
    description:
      'Teste seus conhecimentos sobre a turma de cientistas mais engraçada da TV',
    image: capaTT,
    questions: [
      {
        id: 1,
        text: 'Qual a profissão de Sheldon Cooper?',
        options: [
          'Físico Teórico',
          'Astrofísico',
          'Engenheiro Aeroespacial',
          'Biólogo',
        ],
        correctAnswer: 0,
        difficulty: 'fácil',
        image: proficao,
      },
      {
        id: 2,
        text: 'Qual o nome da namorada/esposa de Leonard?',
        options: ['Amy', 'Bernadette', 'Penny', 'Leslie'],
        correctAnswer: 2,
        difficulty: 'fácil',
        image: penny,
      },
      {
        id: 3,
        text: 'Qual é a frase característica de Sheldon?',
        options: [
          'Isso não é legal',
          'Bazinga!',
          'Bom dia, pessoal',
          'Fascinante',
        ],
        correctAnswer: 1,
        difficulty: 'fácil',
        image: bazinga,
      },
      {
        id: 9,
        text: 'Qual é o nome da namorada/esposa de Howard?',
        options: ['Amy', 'Penny', 'Bernadette', 'Leslie'],
        correctAnswer: 2,
        difficulty: 'fácil',
        image: berny,
      },
      {
        id: 4,
        text: 'O que Howard Wolowitz conquistou profissionalmente que nenhum outro personagem conseguiu?',
        options: [
          'Ganhou um Prêmio Nobel',
          'Foi para o espaço',
          'Publicou mais artigos científicos',
          'Ganhou mais dinheiro',
        ],
        correctAnswer: 1,
        difficulty: 'médio',
        image: howard,
      },
      {
        id: 5,
        text: 'Qual jogo os personagens frequentemente jogam com as mãos?',
        options: [
          'Pedra, Papel, Tesoura',
          'Pedra, Papel, Tesoura, Lagarto, Spock',
          'Cara ou Coroa',
          'Jokenpo Avançado',
        ],
        correctAnswer: 1,
        difficulty: 'médio',
        image: jogo,
      },

      {
        id: 7,
        text: 'Onde Penny trabalha quando conhece os rapazes?',
        options: [
          'Loja de roupas',
          'Farmácia',
          'Cheesecake Factory',
          'Agência de modelos',
        ],
        correctAnswer: 2,
        difficulty: 'médio',
        image: trabalho,
      },

      {
        id: 6,
        text: 'Qual é o nome da mãe de Howard?',
        options: ['Debbie', 'Sharon', 'Esther', 'Não é revelado'],
        correctAnswer: 0,
        difficulty: 'difícil',
        image: mae,
      },

      {
        id: 8,
        text: 'Qual é o problema médico que Sheldon tem quando precisa fazer discursos públicos?',
        options: [
          'Gagueira',
          'Desmaios',
          'Suores excessivos',
          'Calças molhadas',
        ],
        correctAnswer: 2,
        difficulty: 'difícil',
        image: publico,
      },

      {
        id: 10,
        text: 'Qual língua Sheldon tenta aprender para se vingar de Kripke?',
        options: ['Mandarim', 'Russo', 'Klingon', 'Alemão'],
        correctAnswer: 0,
        difficulty: 'difícil',
        image: lingua,
      },
    ],
  },
  {
    id: 'breaking-bad',
    title: 'Breaking Bad',
    description:
      'Teste seus conhecimentos sobre Walter White e seu império das drogas',
    image: capaBd,
    questions: [
      {
        id: 1,
        text: 'Qual é o nome completo de Walter White?',
        options: [
          'Walter Hartwell White',
          'Walter Harold White',
          'Walter Henry White',
          'Walter Harrison White',
        ],
        correctAnswer: 0,
        difficulty: 'médio',
        image: walter,
      },
      {
        id: 2,
        text: 'Qual a cor do cristal produzido por Walter?',
        options: ['Branco', 'Amarelo', 'Vermelho', 'Azul'],
        correctAnswer: 3,
        difficulty: 'fácil',
        image: cristal,
      },
      {
        id: 3,
        text: 'Qual o nome do alter ego de Walter no mundo do crime?',
        options: ['Icenberg', 'Heisenberg', 'Heineken', 'Highberg'],
        correctAnswer: 1,
        difficulty: 'fácil',
        image: ego,
      },
      {
        id: 4,
        text: 'O que Walter White ensinava antes de se tornar um produtor de metanfetamina?',
        options: ['Biologia', 'Física', 'Química', 'Matemática'],
        correctAnswer: 2,
        difficulty: 'fácil',
        image: produtor,
      },
      {
        id: 5,
        text: 'Qual o nome da empresa que Walter co-fundou e depois vendeu sua parte?',
        options: [
          'White Science',
          'Gray Matter Technologies',
          'Blue Sky Innovations',
          'Empire Chemistry',
        ],
        correctAnswer: 1,
        difficulty: 'médio',
        image: empresa,
      },
      {
        id: 6,
        text: 'Qual o nome da doença que Walter tem no início da série?',
        options: [
          'Leucemia',
          'Câncer de pulmão',
          'Câncer de pâncreas',
          'Tumor cerebral',
        ],
        correctAnswer: 1,
        difficulty: 'fácil',
        image: doente,
      },
      {
        id: 7,
        text: 'Qual método Walter e Jesse usam para dissolver corpos?',
        options: [
          'Ácido clorídrico',
          'Ácido fluorídrico',
          'Soda cáustica',
          'Ácido sulfúrico',
        ],
        correctAnswer: 1,
        difficulty: 'difícil',
        image: acido,
      },
      {
        id: 8,
        text: 'Como se chama o cartel mexicano que se torna rival de Walter?',
        options: [
          'Cartel de Juárez',
          'Cartel de Sonora',
          'Cartel de Sinaloa',
          'Cartel de Salamanca',
        ],
        correctAnswer: 0,
        difficulty: 'difícil',
        image: cartel,
      },
      {
        id: 9,
        text: 'Qual o nome do advogado que ajuda Walter e Jesse durante a série?',
        options: [
          'Jimmy McGill',
          'Howard Hamlin',
          'Saul Goodman',
          'Bill Oakley',
        ],
        correctAnswer: 2,
        difficulty: 'médio',
        image: saul,
      },
      {
        id: 10,
        text: 'O que Walter White deixa como herança para seu filho?',
        options: [
          'Uma empresa nova',
          'Dinheiro em uma conta bancária',
          'A casa da família',
          'Um fundo fiduciário',
        ],
        correctAnswer: 3,
        difficulty: 'difícil',
        image: jr,
      },
    ],
  },
  // outro card
];

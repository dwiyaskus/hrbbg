import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Jangan mengeluhkan permohonanmu yg belum terkabul, tetapi bersyukurlah atas apa yangg kau dapatkan tanpa kau harus memintanya',
  'Selalu ada harapan bagi mereka yang sering berdoa dan selalu ada jalan bagi mereka yang gemar berusaha',
  'Hari ini kamu melakukan apa yang tidak dilakukan orang lain. Maka besok kamu akan dapat melakukan hal yang tidak dapat dilakukan orang lai',
  'Janganlah mengatakan hidup tidak adil, jika kita sendiri tidak pernah berusaha untuk mendapatkan keadilan.',
  'Tak perlu jadi hebat untuk memulai, tapi kau harus memulai untuk bisa jadi hebat',
  'Masa depanmu diciptakan oleh apa yang kau kerjakan hari ini, bukan besok.',
  'Sebagian orang bermimpi untuk sukses, sedangkan sebagian lainnya bangun di pagi hari dan mewujudkannya',
  'Setahun dari sekarang, kau mungkin berharap kalau kau sudah mulai berbuat hari ini.',
  'Melakukan hal sekecil apapun, jauh lebih baik daripada sekedar berkeinginan'
  // 'Examining the Evolution of the Typical Web Design Client',
  // 'Katie Griffin loves making that homey art',
  // 'The American Dream retold through mid-century railroad graphics',
  // 'Illustration System Design',
  // 'CarZio-Delivery Driver App SignIn/SignUp',
  // 'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
  // 'Tylko Organise effortlessly -3D & Motion Design',
  // 'RAYO ?? A expanded visual arts festival identity',
  // 'Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover',
  // 'Inside the Mind of Samuel Day',
  // 'Portfolio Review: Is This Portfolio Too Creative?',
  // 'Akkers van Margraten',
  // 'Gradient Ticket icon',
  // 'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
  // 'How to Animate a SVG with border-image'
];

const posts = [...Array(7)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  createdAt: 'unknown',
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;

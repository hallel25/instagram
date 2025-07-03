import { Like } from 'src/like/entities/like.entity';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';

export const mockPosts: Post[] = [
  {
    id: 'b9eead41-c525-416a-8066-e9cad22a0fc8',
    caption: 'חוף מדהים שקלטתי השבוע 🏖️',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VEQ7GbMkw8sZ9YrsQochIYbwH55Bq0p6HA&s',
    userId: '2910457d-1f0d-4366-84b6-e93232d3de77',
    createdAt: new Date('December 17, 2023 03:24:00'),
    updatedAt: new Date(),
  },
  {
    id: 'ae4001ff-5372-4515-988a-0e304e527857',
    caption: 'חוף מקסים שקלטתי השבוע 😎',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VEQ7GbMkw8sZ9YrsQochIYbwH55Bq0p6HA&s',
    userId: 'a61cdea2-26af-4c2f-9af7-beebb4b87a52',
    createdAt: new Date('December 17, 2024 03:24:00'),
    updatedAt: new Date(),
  },
  {
    id: '7d93e541-0ea2-4307-80e7-edd48e6f28df',
    caption: 'חוף מהמם שקלטתי השבוע 💕',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VEQ7GbMkw8sZ9YrsQochIYbwH55Bq0p6HA&s',
    userId: '2910457d-1f0d-4366-84b6-e93232d3de77',
    createdAt: new Date('Feb 2, 2025 03:24:00'),
    updatedAt: new Date(),
  },
  {
    id: '3c30736c-3736-4c64-930f-4b058e7cd717',
    caption: 'חוף מעלף שקלטתי השבוע 😍',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VEQ7GbMkw8sZ9YrsQochIYbwH55Bq0p6HA&s',
    userId: 'a61cdea2-26af-4c2f-9af7-beebb4b87a52',
    createdAt: new Date('jun 23, 2025 03:24:00'),
    updatedAt: new Date(),
  },
  {
    id: 'c6531dc2-6b8a-49f4-b49e-2ce86ed3756b',
    caption: 'חוף יפיפה שקלטתי השבוע ✨',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VEQ7GbMkw8sZ9YrsQochIYbwH55Bq0p6HA&s',
    userId: '015805b8-1d31-43fc-838a-bbb61fa1a384',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '1dce3dbe-c355-4742-b3f6-a7a8ed39d0ad',
    caption: 'חוף עוצר נשימה שקלטתי השבוע 🤿',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VEQ7GbMkw8sZ9YrsQochIYbwH55Bq0p6HA&s',
    userId: '015805b8-1d31-43fc-838a-bbb61fa1a384',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockUsers: User[] = [
  {
    id: '2910457d-1f0d-4366-84b6-e93232d3de77',
    username: 'koko2426',
    email: '1@gmail.com',
  },
  {
    id: '015805b8-1d31-43fc-838a-bbb61fa1a384',
    username: 'foodiegal',
    email: '2@gmail.com',
  },
  {
    id: 'a61cdea2-26af-4c2f-9af7-beebb4b87a52',
    username: 'beachlover',
    email: '3@gmail.com',
  },
];

export const mockLikes: Like[] = [
  {
    id: '78f528e9-cbaa-4aeb-b803-aa4ef32af13c',
    postId: '1dce3dbe-c355-4742-b3f6-a7a8ed39d0ad',
    userId: 'a61cdea2-26af-4c2f-9af7-beebb4b87a52',
    createdAt: new Date(),
  },
  {
    id: '7580ccdd-d9f4-4acf-9d3d-b9f89400a153',
    postId: 'c6531dc2-6b8a-49f4-b49e-2ce86ed3756b',
    userId: 'a61cdea2-26af-4c2f-9af7-beebb4b87a52',
    createdAt: new Date(),
  },
  {
    id: '7fd26502-d465-44d3-90f6-cb81d8d66f44',
    postId: '3c30736c-3736-4c64-930f-4b058e7cd717',
    userId: '015805b8-1d31-43fc-838a-bbb61fa1a384',
    createdAt: new Date(),
  },
  {
    id: 'b9dfbd87-af6a-427e-8f78-9eb92ac9d19f',
    postId: '3c30736c-3736-4c64-930f-4b058e7cd717',
    userId: '2910457d-1f0d-4366-84b6-e93232d3de77',
    createdAt: new Date(),
  },
];

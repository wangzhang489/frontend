<!--<template>-->
<!--  <v-card>-->
<!--    <v-data-iterator :items="games" :items-per-page="20" :search="search">-->
<!--      <template v-slot:header>-->
<!--        <v-toolbar class="px-2">-->
<!--          <v-text-field-->
<!--              v-model="search"-->
<!--              clearable-->
<!--              density="comfortable"-->
<!--              hide-details-->
<!--              placeholder="Search"-->
<!--              prepend-inner-icon="mdi-magnify"-->
<!--              style="max-width: 300px"-->
<!--              variant="solo"-->
<!--          ></v-text-field>-->
<!--        </v-toolbar>-->
<!--      </template>-->

<!--      <template v-slot:default="{ items }">-->
<!--        <v-container class="pa-2" fluid>-->
<!--          <v-row dense>-->
<!--            <v-col v-for="item in items" :key="item.title" cols="auto" md="4">-->
<!--              <v-card class="pb-3" border flat>-->
<!--                <v-img :src="item.raw.img"></v-img>-->

<!--                <v-list-item class="mb-2" :subtitle="item.raw.subtitle">-->
<!--                  <template v-slot:title>-->
<!--                    <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>-->
<!--                  </template>-->
<!--                </v-list-item>-->

<!--                <div class="d-flex justify-space-between px-4">-->
<!--                  <div-->
<!--                      class="d-flex align-center text-caption text-medium-emphasis me-1"-->
<!--                  >-->
<!--                    <v-icon icon="mdi-clock" start></v-icon>-->

<!--                    <div class="text-truncate">{{ item.raw.duration }}</div>-->
<!--                  </div>-->

<!--                  <v-btn border flat size="small" class="text-none" text="Read">-->
<!--                  </v-btn>-->
<!--                </div>-->
<!--              </v-card>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-container>-->
<!--      </template>-->

<!--      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">-->
<!--        <div class="d-flex align-center justify-center pa-4">-->
<!--          <v-btn-->
<!--              :disabled="page === 1"-->
<!--              icon="mdi-arrow-left"-->
<!--              density="comfortable"-->
<!--              variant="tonal"-->
<!--              rounded-->
<!--              @click="prevPage"-->
<!--          ></v-btn>-->

<!--          <div class="mx-2 text-caption">-->
<!--            Page {{ page }} of {{ pageCount }}-->
<!--          </div>-->

<!--          <v-btn-->
<!--              :disabled="page >= pageCount"-->
<!--              icon="mdi-arrow-right"-->
<!--              density="comfortable"-->
<!--              variant="tonal"-->
<!--              rounded-->
<!--              @click="nextPage"-->
<!--          ></v-btn>-->
<!--        </div>-->
<!--      </template>-->
<!--    </v-data-iterator>-->
<!--  </v-card>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data: () => ({-->
<!--    search: '',-->
<!--    games: [-->
<!--      {-->
<!--        id: 91,-->
<!--        author: 'Jennifer Chin',-->
<!--        bookformat: 'Paperback',-->
<!--        description:-->
<!--            'The art of solderingâ€”permanently joining metal components with a torch and solderâ€”can open up a new world of creative possibilities for jewelry makers.,Â ,In ,Hot Connections Jewelry,, award-winning jewelry designer Jennifer Chin guides you through every step, from choosing a torch to basic techniques like sawing, filing, and riveting, as well as more advanced techniques like creating surface textures, setting stones, and using inlay.,Â ,With 23 in-depth lessons and 15 stunning projects, as well as inspiring examples from contributing artists, ,Hot Connections Jewelry, is your essential guide to unleashing your creativity and confidence in jewelry making.,Â ',-->
<!--        genre: 'Art,Crafts,Jewellery,Crafts,Jewellery Making,Nonfiction',-->
<!--        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320565539l/10043652.jpg',-->
<!--        isbn: '823033368',-->
<!--        link: 'https://goodreads.com/book/show/10043652-hot-connections-jewelry',-->
<!--        pages: 160,-->
<!--        rating: 4.09,-->
<!--        reviews: 2,-->
<!--        title:-->
<!--            'Hot Connections Jewelry: The Complete Sourcebook of Soldering Techniques',-->
<!--      },-->
<!--      {-->
<!--        id: 92,-->
<!--        author: 'Danny Sugerman',-->
<!--        bookformat: 'Paperback',-->
<!--        description:-->
<!--            'This book consists of magazine and newspaper articles, interviews, record reviews, excerpts from books, and other material related to the history of The Doors, to whose memory it is dedicated.This book consists of magazine and newspaper articles, interviews, record reviews, excerpts from books, and other material related to the history of The Doors, to whose memory it is dedicated.',-->
<!--        genre:-->
<!--            'Music,Biography,Nonfiction,Biography Memoir,Music,Rock N Roll,Art,Photography',-->
<!--        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1418047400l/1004383.jpg',-->
<!--        isbn: '688013635',-->
<!--        link: 'https://goodreads.com/book/show/1004383.The_Doors',-->
<!--        pages: 256,-->
<!--        rating: 4.2,-->
<!--        reviews: 14,-->
<!--        title: 'The Doors: The Illustrated History',-->
<!--      },-->
<!--      {-->
<!--        id: 93,-->
<!--        author: 'Mary Brave Bird,Richard Erdoes,Mary Crow Dog',-->
<!--        bookformat: 'Paperback',-->
<!--        description:-->
<!--            'The dramatic, brutally honest, and ultimately triumphant sequel to the bestselling American Book Award winner "Lakota Woman," this book continues Mary Brave Bird\' s courageous story of life as a Native American in a white-dominated society.',-->
<!--        genre:-->
<!--            'Nonfiction,Autobiography,Memoir,Biography,History,Biography Memoir,Native Americans,History,Native American History,Cultural,Womens',-->
<!--        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1180149438l/1004393.jpg',-->
<!--        isbn: '60975830',-->
<!--        link: 'https://goodreads.com/book/show/1004393.Ohitika_Woman',-->
<!--        pages: 304,-->
<!--        rating: 3.88,-->
<!--        reviews: 25,-->
<!--        title: 'Ohitika Woman',-->
<!--      },-->
<!--      {-->
<!--        id: 94,-->
<!--        author: 'Jerry Siegel,Joe Shuster',-->
<!--        bookformat: 'Paperback',-->
<!--        description:-->
<!--            'Experience the history of Superman with this series that reprints the early adventures of the Man of Tomorrow in chronological order. This volume features classic tales from 1939 and 1940 written and illustrated by Superman co-creators Jerry Siegel and Joe Shuster, in which the Man of Tomorrow battles crooked politicians and slumlords as he brings justice to the downtrodden masses.',-->
<!--        genre:-->
<!--            'Sequential Art,Comics,Sequential Art,Graphic Novels,Dc Comics,Superman,Superheroes,Dc Comics,Graphic Novels Comics,Comics,Superheroes,Fiction,Science Fiction,Comics,Comic Book',-->
<!--        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1307839559l/1004406.jpg',-->
<!--        isbn: '1401212158',-->
<!--        link: 'https://goodreads.com/book/show/1004406.The_Superman_Chronicles_Vol_2',-->
<!--        pages: 192,-->
<!--        rating: 3.74,-->
<!--        reviews: 19,-->
<!--        title: 'The Superman Chronicles, Vol. 2',-->
<!--      },-->
<!--      {-->
<!--        id: 95,-->
<!--        author: 'Kurt Mahr',-->
<!--        bookformat: null,-->
<!--        description:-->
<!--            "When Perry Rhodan, interplanetary Peace Lord searches to unravel the secret of eternal life, he finds a clue from the past of Ferrol which sends him to the giant planet of the Vega System, Gol. ,There, accompanied by two Arkonides, the beautiful Thora and scientist Khrest, and as ever, by his Mutant Corps, Perry explores the planet's surface. ,And Gol is a monster. Not only has it a gravity far exceeding anything the humans have ever encountered, but they have to contend with an awesome army of glowing forms which attacks their ship...",-->
<!--        genre: 'Science Fiction,Space,Space Opera,Pulp',-->
<!--        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1255093947l/1004414.jpg',-->
<!--        isbn: '860078698',-->
<!--        link: 'https://goodreads.com/book/show/1004414.Ghosts_of_Gol',-->
<!--        pages: 0,-->
<!--        rating: 3.48,-->
<!--        reviews: 7,-->
<!--        title: 'Ghosts of Gol',-->
<!--      },-->
<!--    ],-->
<!--  }),-->
<!--}-->
<!--</script>-->

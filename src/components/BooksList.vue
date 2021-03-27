<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
				<v-container fluid>
					<v-layout row>
						<v-flex xs7 md8>
							<v-text-field label="Поиск" v-model="searchTerm"></v-text-field>
						</v-flex>
						<v-flex xs5 md4>
							<v-select
								label="Уровень"
								:items="levels"
								v-model="level"
								multiple
							></v-select>
						</v-flex>
					</v-layout>
				</v-container>
			</v-flex>
			<v-flex
				v-for="book in filteredBooks"
				:key="book.id"
				xs12
				sm10
				md8
				offset-sm1
				offset-md2
			>
				<v-card color="info" class="white--text">
					<v-container fluid>
						<v-layout row class="hidden-sm-and-down">
							<v-flex xs4 md3>
								<v-card-media
									src="https://topspiski.com/wp-content/uploads/2018/02/harry-potter.jpg"
									height="100px"
								>
								</v-card-media>
								<div class="tetx-xs-center">
									<v-btn flat color="white">
										<v-icon left>visibility</v-icon> Youtube
									</v-btn>
								</div>
							</v-flex>
							<v-flex xs8 md9>
								<v-card-title>
									<div>
										<div class="headline">{{ book.title }}</div>
										<div>{{ book.description }}</div>
										<v-divider class="white"></v-divider>
										<div>
											Уровень: {{ getBookLevel(book.level) }},
											{{ book.parts }} частей
										</div>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-rating
										v-model="book.rating"
										color="yellow"
										readonly
										dense
										half-increments
									></v-rating>
									<div class="ml-1">
										<span>{{ book.rating }}</span>
										<span> ({{ book.ratingCount }})</span>
									</div>
									<v-spacer></v-spacer>
									<v-btn class="primary" flat>Открыть</v-btn>
								</v-card-actions>
							</v-flex>
						</v-layout>

						<div class="hidden-md-and-up">
							<v-layout row>
								<v-flex xs4 md3>
									<v-card-media
										src="https://topspiski.com/wp-content/uploads/2018/02/harry-potter.jpg"
										height="100px"
									>
									</v-card-media>
								</v-flex>
								<v-flex xs8 md9>
									<v-card-title>
										<div>
											<h4 class="">{{ book.title }}</h4>
                      <div class="tetx-xs-center">
                        <v-btn flat color="white">
                          <v-icon left>visibility</v-icon> Youtube
                        </v-btn>
                      </div>
										</div>
									</v-card-title>
								</v-flex>
							</v-layout>
              <v-layout row>
								<v-flex xs12>
									<div>{{ book.description }}</div>
								</v-flex>
							</v-layout>
							<v-layout row>
								<v-flex xs12>
									<div>
										Уровень: {{ getBookLevel(book.level) }},
										{{ book.parts }} частей
									</div>
								</v-flex>
							</v-layout>
              <v-layout row>
								<v-flex xs12>
									<v-card-actions>
									<v-rating
										v-model="book.rating"
										color="yellow"
										readonly
										dense
										half-increments
									></v-rating>
									<div class="ml-1">
										<span>{{ book.rating }}</span>
										<span>({{ book.ratingCount }})</span>
									</div>
									<v-spacer></v-spacer>
									<v-btn class="primary" flat>Открыть</v-btn>
								</v-card-actions>
								</v-flex>
							</v-layout>
						</div>
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	data() {
		return {
			searchTerm: null,
			level: [],
			levels: ["A1", "A2", "B1", "B2", "C1", "C2"]
		};
	},
	computed: {
		books() {
			return this.$store.getters.getBooks;
		},
		filteredBooks() {
			let books = this.books;
			if (this.searchTerm)
				books = books.filter(
					item =>
						item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=
							0 ||
						item.description
							.toLowerCase()
							.indexOf(this.searchTerm.toLowerCase()) >= 0
				);
			if (this.level.length)
				books = books.filter(
					item =>
						this.level.filter(val => item.level.indexOf(val) !== -1).length > 0
				);
			return books;
		}
	},
	methods: {
		getBookLevel(level) {
			return level.join("/");
		}
	}
};
</script>
<style lang="">
</style>
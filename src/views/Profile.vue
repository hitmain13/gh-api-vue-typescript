<template>
	<div class="main-container">
		<div id="profile-container">
			<img id="profile-avatar" :src="profile.avatar_url" />
			<h3 id="profile-name">{{ profile.name }}</h3>
			<span id="profile-bio">{{ profile.bio }}</span>
			<div class="profile-followers-container">
				<li class="profile-follower"><Followers /> Followers: {{ profile.followers }}</li>
				<li class="profile-following">Following: {{ profile.following }}</li>
			</div>
			<div class="profile-details">
				<li class="profile-location"><Location class="svg-location" />{{ profile.location }}</li>
				<Blog /><a :href="profile.blog" class="profile-blog">{{ profile.blog }}</a>
			</div>
			<hr />
		</div>
		<div id="repo-container">
			<h2>Repositories</h2>
			<div id="repo-data" v-on:load="" v-for="(repo, index) in repos" v-bind:key="index">
				<div class="repo-name">
					<a :href="repo.html_url" target="_blank" class="repo-title">{{ repo.name }}</a>
					<span class="repo-visibility">{{ repo.visibility }}</span>
				</div>
				<span class="repo-description">{{ repo.description }}</span>
				<div class="repo-footer">
					<li class="list-group-item language">{{ repo.language }}</li>
					<li class="list-group-item forks">Forks: {{ repo.forks }}</li>
					<li class="list-group-item updated-at">Last update: {{ new Date(repo.updated_at) }}</li>
				</div>
				<hr />
			</div>
		</div>
	</div>
	<div v-if="profile === false" class="main-container"></div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import axios from "axios";
import Followers from "../assets/Followers.svg";
import Location from "../assets/Location.svg";
import Blog from "../assets/Blog.svg";

declare interface GithubProps {
	url: string;
	client_secret: string;
}
declare interface ProfileProps {
	name: string;
	avatar_url: string;
	blog: string;
	message: string;
	location: string;
	bio: string;
	followers: string;
	following: string;
	html_url: string;
}
declare interface RepoProps {
	name: string;
	html_url: string;
	description: string;
	visibility: string;
	forks: string;
	language: string;
	updated_at: string;
}

declare interface BaseComponentData {
	github: GithubProps;
	profile: ProfileProps;
	repos: RepoProps[];
}
export default {
	components: {
		Followers,
		Location,
		Blog,
	},
	data(): BaseComponentData {
		return {
			github: {
				url: import.meta.env.VITE_APP_API,
				client_secret: import.meta.env.VITE_APP_SECRET_KEY,
			},
			profile: {
				name: "",
				avatar_url: "",
				blog: "",
				message: "",
				location: "",
				bio: "",
				followers: "",
				following: "",
				html_url: "",
			},
			repos: [
				{
					name: "",
					html_url: "",
					description: "",
					visibility: "",
					forks: "",
					language: "",
					updated_at: "",
				},
			],
		};
	},
	mounted: function () {
		console.log(this.profile.name === null);
		const route = useRoute();
		const id = route.params.id;
		const { url, client_secret } = this.github;
		const urlProfile = `${url}/${id}`;
		const urlRepo = `${url}/${id}/repos`;

		const headers = {
			Authorization: `token ${client_secret}`,
		};
		try {
			axios.get(urlProfile, { headers }).then(({ data }) => {
				this.profile = data;
			}).catch(() => {
				this.$router.push(`/notfound`);
			})
			axios.get(urlRepo, { headers }).then(({ data }) => {
				this.repos = data;
			}).catch(() => {
				this.$router.push(`/notfound`);
			})
		} catch (err) {
			console.log("error")
			this.$router.push(`/notfound`);
		}
	},
};
</script>

<style>
h2,
h3,
span,
a,
li {
	color: #c9d1d9;
}
.main-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.profile-followers-container {
	display: flex;
	list-style: none;
	margin: 20px 0;
}

.profile-follower {
	margin-left: 10px;
	font-weight: bold;
}

.profile-following {
	margin-left: 20px;
	list-style: disc;
	font-weight: bold;
}

.profile-details {
	list-style: none;
	margin-left: 10px;
}
.profile-location {
	font-weight: bold;
}
.svg-location {
	margin-right: 5px;
}

.profile-blog {
	margin-left: 5px;
	overflow: hidden;
	text-decoration: none;
}

#profile-name {
	margin-top: 20px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
}

#profile-bio {
	font-size: 15px;
	text-align: center;
}

#profile-container {
	display: flex;
	width: 40%;
	flex-direction: column;
	margin: 30px 100px 30px;
}
#profile-avatar {
	width: 300px;
	border-radius: 50%;
	border: 3px gray;
}

#repo-container {
	width: 100%;
	margin-left: -30%;
	margin-top: 20px;
}

.repo-name {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
}

.repo-title {
	text-decoration: none;
	font-weight: bold;
	font-size: 20px;
	margin-right: 10px;
	color: #58a6ff;
}
.repo-title:hover {
	text-decoration: underline;
}
.repo-visibility {
	display: inline-block;
	padding: 0 7px;
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	white-space: nowrap;
	border: 1px solid gray;
	border-radius: 2em;
}
.repo-name {
	display: flex;
}

.repo-footer {
	display: flex;
	margin-top: 10px;
}

.list-group-item {
	color: #6b737c;
}
.repo-data {
	display: flex;
	flex-direction: column;
	align-items: left;
}

.forks {
	margin-right: 30px;
}
.list-group-item.language {
	margin-right: 30px;
	list-style: disc;
}
</style>

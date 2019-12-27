import {rerender} from './../render';

var state = {
	dialogsPage: {
		dialogs: [
			{
				id: 1,
				name: 'James'
			},
			{
				id: 2,
				name: 'Peter'
			}
		]
	},
	profilePage: {
		posts: [
			{
				id: 1,
				text: 'Hello, it is first message!'
			},
			{
				id: 2,
				text: 'Some second post'
			}
		]
	}
};

export let addPost = (text) => {
	let newPost = {
		id: 3,
		text: text
	};
	state.profilePage.posts.push(newPost);
	rerender(state, addPost);
} 

export default state;

function UserIdPage(props) {
	return <h1>{props.id}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
	const { params } = context;
	const userId = params.uid;

	return {
		props: {
			id: "userid-" + userId,
		},
	};
}

//we see that it works and that there's no need to predifined dynamic paths in advance

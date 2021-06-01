const UserProfilePage = (props) => {
	return <h1>{props.username}s</h1>;
};

export default UserProfilePage;

//this getServerSideProps only executes on the server after deployment(and also on our develpment server)
//but it's not statically pre-generated, this function runs for every incoming request
//(useful with higly dynamic data wich changes multiple times every seconds)
export async function getServerSideProps(context) {
	const { params, req, res } = context; //I can access the all properties of the context object (compare to getStaticProps)

	//req, res => default node objects for incoming messages and responses
	//important if you need special header or cookie data
	return {
		props: {
			username: "Max",
		},
	};
}

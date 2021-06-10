import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = process.env.REACT_APP_API_URL;

//Create an Apollo Client
const client = new ApolloClient({
    uri,
    cache: new InMemoryCache(),
    connectToDevTools: true
});

export default client;
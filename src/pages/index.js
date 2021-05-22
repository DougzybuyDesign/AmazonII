import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/*Banner*/}
        <Banner />
        {/*ProductFeed*/}
        <ProductFeed products = { products }/>

      </main>
    </div>
  );
}

//Server side rendering
//this function tells next.js that this page is no longer static page and there is something middle(server)
export async function getServerSideProps(context){
  /*const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json //gives us json back
  );*/

  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  //console.log(products);
  //this is how we send data from server to frontend component
  return {
    props: {
      products,
    },
  };
}
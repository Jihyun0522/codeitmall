import { useEffect, useState } from "react";
import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export async function getStaticProps() {
  const res = await axios.get("/products");
  const nextProducts = res.data.results;

  return {
    props: {
      products: nextProducts, // 이 값이 페이지 컴포넌트의 props로 전달됨
    },
  };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.productList} products={products} />
    </>
  );
}

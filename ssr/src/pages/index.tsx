import { GetStaticProps } from "next/types";

export default function Index() {
  return;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/animals',
      permanent: false,
    },
  };
};
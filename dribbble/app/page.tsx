import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";
import Posts from "@/components/Posts";

const Home = () => {
  return (
    <div>
      <Categories></Categories>
      <Posts></Posts>
      <LoadMore></LoadMore>
    </div>
  );
};

export default Home;

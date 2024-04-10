/* eslint-disable react/prop-types */
import Header from "../Components/Header";
import InterviewCards from "../Components/InterviewCrads";
import MainComp from "../Components/MainComp";
import SearchBar from "../Components/SearchBar";

export default function LandingPage({ data }) {
  return (
    <div>
      <Header>
        <SearchBar />
      </Header>
      <MainComp>
        <InterviewCards data={data} />
      </MainComp>
    </div>
  );
}

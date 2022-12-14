import config from "../../config.json";
import styled from "styled-components";
import { CSSReset } from "../components/CSSReset";
import Menu from "../components/Menu";
import { StyledTimeline } from '../components/Timeline'
function HomePage() {
  const stylesHome = {
    // backgroundColor: "red" 
  };

  return (

    <>
      <CSSReset />
      <div style={stylesHome}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}></Timeline>
      </div>
    </>

  );
}

export default HomePage;


const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner"/> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png/`} />

        <div>
          <h2>{config.name}</h2>

          <p>{config.description}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {

  const playlistNames = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div key={playlistName.title}>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

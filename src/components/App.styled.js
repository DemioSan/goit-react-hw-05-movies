import { styled } from 'styled-components';

export const AppStyled = styled('div')`
  font-size: 30px;
  color: #1d1340;
  background-color: #bacbd9;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 15px;
  padding-top: 60px;
  padding-left: 15px;
  position: relative;

  header {
    display: flex;
    align-items: center;
    height: 49px;
    border-bottom: 1px solid #223440;
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #bacbd9;
    width: 100%;
  }

  header > nav {
    display: flex;
    gap: 20px;
    padding: 0;
    margin-left: 26px;
  }

  nav > a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &.active {
      color: #5d7a8c;
    }
  }

  nav > a:hover {
    text-decoration: underline;
  }

  button {
    width: 140px;
    height: 100%;
    font-size: 20px;
    border-radius: 15px;
  }

  input {
    border-radius: 15px;
    padding-left: 10px;
    height: 100%;
    font-size: 20px;
    width: 360px;
  }

  .movie-list > li {
    a {
      color: #5d7a8c;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .movie-details-wrap {
    display: flex;
    gap: 30px;
    padding: 20px;
  }

  .movie-details-pic {
    height: 100vh;
    object-fit: contain;
    max-width: 500px;
  }

  .movie-details-info > * {
    margin-top: 0;
  }

  .genres-list {
    display: flex;
    gap: 20px;
    list-style: none;
  }

  .movie-detail-switcher {
    height: 49px;
    max-width: 95vw;
  }

  .cast-wrap {
    border-top: 1px solid #223440;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cast-list {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0;
    margin-right: 15px;
    padding: 0;

    .cast-card {
      width: 300px;
      height: 450px;
      padding: 0 5px 5px 5px;
      border: 1px solid #223440;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .cast-pic {
        max-width: 300px;
      }
      .cast-text {
        font-size: 22px;
        margin: 0;
        padding: 0;
        text-align: center;
      }
      .cast-name {
        font-size: 26px;
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }

  .reviews {
    border-top: 1px solid #223440;
    margin-right: 15px;
    h2 {
      text-align: center;
    }
  }
`;

import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import axios from "axios";
import {useQuery} from "react-query";
import {fetchCoins} from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CoinList = styled.div``

const Coin = styled.div`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }

  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor}
`

const Loader = styled.span`
  text-align: center;
  display: block;
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`

interface ICoin {
  id: string
  name: string
  symbol: string
  rank: number
  in_new: boolean
  is_active: boolean,
  type: string,
}

// const endpoint = 'https://proxy.cors.sh/https://api.coinpaprika.com/v1/coins';

function Coins() {
  const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins)
  // const [coins, setCoins] = useState<ICoin[]>([])
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   (async () => {
  //     const {data} = await axios.get("https://api.coinpaprika.com/v1/coins")
  //     // const response = await fetch(endpoint);
  //     // const data = await response.json();
  //     setCoins(data.slice(0, 100))
  //     setLoading(false)
  //   })()
  // }, [])

  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      {isLoading ? <Loader>loading...</Loader> : <CoinList>
        {data?.slice(0, 100).map(coin => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`} state={{name: coin.name}}>
              <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
              {coin.name} &rarr;
            </Link>
          </Coin>
        ))}
      </CoinList>}
    </Container>
  );
}

export default Coins;
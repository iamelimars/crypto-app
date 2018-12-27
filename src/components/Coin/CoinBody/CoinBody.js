import React from 'react'
import styles from './CoinBody.css'
import { Container, Row, Col } from 'react-grid-system';


const coinBody = (props) => {
    return (
        <Container className={styles.body}>
            <Row className={styles.price_section}>
                <Col className={styles.card} md={3}>
                    <Col xs={12}>
                        <span>Price</span>
                        <span>{props.coin.price}</span>
                    </Col>
                </Col>
                <Col className={styles.card} md={3}>
                    <Col xs={12}>
                        <span>Open Price</span>
                        <span>{props.coinFullData.AggregatedData.OPEN24HOUR}</span>
                    </Col>
                </Col>
                <Col className={styles.card} md={3}>
                    <Col xs={12}>
                        <span>24H High</span>
                        <span>{props.coinFullData.AggregatedData.HIGH24HOUR}</span>
                    </Col>
                </Col>
                <Col className={styles.card} md={3}>
                    <Col xs={12}>
                        <span>24H Low</span>
                        <span>{props.coinFullData.AggregatedData.LOW24HOUR}</span>
                    </Col>
                </Col>
            </Row>

            <hr />
            <Row>

                <Col md={4} className={styles.change_section}>
                    <Col xs={12}>
                        <span>Change</span>
                    </Col>
                    
                    <span>24H: {props.coinFullData.AggregatedData.CHANGE24HOUR}</span>
                    <span>Day: {props.coinFullData.AggregatedData.CHANGEDAY}</span>
                    <span>% 24H: %{props.coinFullData.AggregatedData.CHANGEPCT24HOUR}</span>
                    <span>% Day: %{props.coinFullData.AggregatedData.CHANGEPCTDAY}</span>
                </Col>

                <Col md={4} className={styles.volume_section}>
                    <span>Volume</span>
                    <span>24H: {props.coinFullData.AggregatedData.VOLUME24HOUR}</span>
                    <span>24H To: {props.coinFullData.AggregatedData.VOLUME24HOURTO}</span>
                    <span>Day: {props.coinFullData.AggregatedData.VOLUMEDAY}</span>
                    <span>Day To: {props.coinFullData.AggregatedData.VOLUMEDAYTO}</span>
                    <span>Hour: {props.coinFullData.AggregatedData.VOLUMEHOUR}</span>
                    <span>Hour To: {props.coinFullData.AggregatedData.VOLUMEHOURTO}</span>
                </Col>


                <Col md={4} className={styles.total_volume_section}>
                    <span>Total Volume</span>
                    <span>24H: {props.coinFullData.AggregatedData.TOTALVOLUME24H}</span>
                    <span>24H To: {props.coinFullData.AggregatedData.TOTALVOLUME24HTO}</span>
                </Col>

            </Row>
            <div className={styles.info_section}>
                <span>Circulating Supply: {props.coin.circulatingSupply}</span>
                <span>Market Cap: {props.coin.marketCap}</span>
                <span>Symbol: {props.coin.symbol}</span>
                <span>Total Supply: {props.coin.totalSupply}</span>
            </div>
            <hr />
            <div className={styles.data_section}>
                <span>Market: {props.coinFullData.AggregatedData.MARKET}</span>
                <span>Rank: {props.coin.rank}</span>
                <span>Website: <a target="_blank" href={props.coin.websiteUrl}>{props.coin.websiteUrl}</a></span>
                <span>All Time High: {props.coin.allTimeHigh.price} {props.coin.allTimeHigh.timestamp}</span>
                <span>Total Coins Mined: {props.coinFullData.CoinInfo.TotalCoinsMined}</span>
                <span>Net Hashes p/s: {props.coinFullData.CoinInfo.NetHashesPerSecond}</span>
            </div>
            <hr />
            <div className={styles.description_section}>
                <span>{props.coin.description}</span>
            </div>
        </Container>
    )
}

export default coinBody
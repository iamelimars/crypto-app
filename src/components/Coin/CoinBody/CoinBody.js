import React from 'react'
import styles from './CoinBody.css'
import { Container, Row, Col } from 'react-grid-system';
import * as moment from 'moment';
import numeral from 'numeral'


const coinBody = (props) => {
    return (
        <Container className={styles.body}>
            <Row justify="between" className={styles.price_section}>
                <Col className={styles.card} md={3}>
                    <Col xs={12}>
                        <span className={styles.section_title}>PRICE</span>
                        <span>{numeral(props.coin.price).format('$0.00')}</span>
                    </Col>
                </Col>
                <Col className={styles.card} md={3}>
                    <Col xs={12}>
                        <span className={styles.section_title}>OPEN PRICE</span>
                        <span>{numeral(props.coinFullData.AggregatedData.OPEN24HOUR).format('$0.00')}</span>
                    </Col>
                </Col>
                <Col className={styles.card} md={3}>
                    <Col xs={12}>
                        <span className={styles.section_title}>24H HIGH</span>
                        <span>{numeral(props.coinFullData.AggregatedData.HIGH24HOUR).format('$0.00')}</span>
                    </Col>
                </Col>
                <Col className={styles.card} md={3}>
                    <Col xs={12}>
                        <span className={styles.section_title}>24H LOW</span>
                        <span>{numeral(props.coinFullData.AggregatedData.LOW24HOUR).format('$0.00')}</span>
                    </Col>
                </Col>
            </Row>
            <Row className={styles.info_section}>
                <Col className={styles.section_title} xs={6}> CIRCULATING SUPPLY</Col><Col className={styles.info_section_data} xs={6}> {numeral(props.coin.circulatingSupply).format('0,00')}</Col>
                <Col className={styles.section_title} xs={6}> MARKET CAP</Col><Col className={styles.info_section_data} xs={6}> {numeral(props.coin.marketCap).format('$0,00')}</Col>
                <Col className={styles.section_title} xs={6}> TOTAL SUPPLY</Col><Col className={styles.info_section_data} xs={6}> {numeral(props.coin.totalSupply).format('0,00')}</Col>
            </Row>
            <Row justify="between">
                <Col sm={12} lg={3} className={styles.change_section}>
                    <Row >
                        <Col xs={12}>CHANGE</Col>

                        <Col xs={6} className={styles.section_title}>24H</Col><Col className={styles.change_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.CHANGE24HOUR).format('$0.00')}</Col>
                        <Col xs={6} className={styles.section_title}>DAY</Col><Col className={styles.change_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.CHANGEDAY).format('$0.00')}</Col>
                        <Col xs={6} className={styles.section_title}>%24H</Col><Col className={styles.change_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.CHANGEPCT24HOUR).format('0.000')}%</Col>
                        <Col xs={6} className={styles.section_title}>%DAY</Col><Col className={styles.change_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.CHANGEPCTDAY).format('0.000')}%</Col>
                    </Row>
                </Col>


                <Col sm={12} lg={4} className={styles.volume_section}>
                    <Row>
                        <Col className={styles.row_title} xs={12}>VOLUME</Col>
                        <Col xs={6} className={styles.section_title}>24H</Col><Col className={styles.volume_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.VOLUME24HOUR).format('$0,00.00')}</Col>
                        <Col xs={6} className={styles.section_title}>24H TO</Col><Col className={styles.volume_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.VOLUME24HOURTO).format('$0,00.00')}</Col>
                        <Col xs={6} className={styles.section_title}>DAY</Col><Col className={styles.volume_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.VOLUMEDAY).format('$0,00.00')}</Col>
                        <Col xs={6} className={styles.section_title}>DAY TO</Col><Col className={styles.volume_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.VOLUMEDAYTO).format('$0,00.00')}</Col>
                        <Col xs={6} className={styles.section_title}>HOUR</Col><Col className={styles.volume_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.VOLUMEHOUR).format('$0,00.00')}</Col>
                        <Col xs={6} className={styles.section_title}>HOUR TO</Col><Col className={styles.volume_section_data} xs={6}>{numeral(props.coinFullData.AggregatedData.VOLUMEHOURTO).format('$0,00.00')}</Col>
                    </Row>
                </Col>
                <Col sm={12} lg={4} className={styles.total_volume_section}>
                    <Row>
                        <Col xs={12}>TOTAL VOLUME</Col>
                        <Col xs={5} className={styles.section_title}>24H</Col><Col xs={7} className={styles.total_volume_section_data}>{numeral(props.coinFullData.AggregatedData.TOTALVOLUME24H).format('$0,00.00')}</Col>
                        <Col xs={5} className={styles.section_title}>24H TO</Col><Col xs={7} className={styles.total_volume_section_data}>{numeral(props.coinFullData.AggregatedData.TOTALVOLUME24HTO).format('$0,00.00')}</Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className={styles.data_section}>
                    <Row>
                        <Col className={styles.section_title} xs={6}>MARKET</Col><Col className={styles.data_section_data} xs={6}>{props.coinFullData.AggregatedData.MARKET}</Col>
                        <Col className={styles.section_title} xs={6}>RANK</Col><Col className={styles.data_section_data} xs={6}>{props.coin.rank}</Col>
                        <Col className={styles.section_title} xs={6}>SYMBOL</Col><Col className={styles.data_section_data} xs={6}>{props.coin.symbol}</Col>
                        <Col className={styles.section_title} xs={6}>WEBSITE</Col><Col className={styles.data_section_data} xs={6}><a target="_blank" href={props.coin.websiteUrl}>{props.coin.websiteUrl}</a></Col>
                        <Col className={styles.section_title} xs={6}>ALL TIME HIGH</Col><Col className={styles.data_section_data} xs={6}>{props.coin.allTimeHigh.price} {props.coin.allTimeHigh.timestamp}</Col>
                        <Col className={styles.section_title} xs={6}>TOTAL COINS MINED</Col><Col className={styles.data_section_data} xs={6}>{props.coinFullData.CoinInfo.TotalCoinsMined}</Col>
                        <Col className={styles.section_title} xs={6}>NET HASHES p/s</Col><Col className={styles.data_section_data} xs={6}>{props.coinFullData.CoinInfo.NetHashesPerSecond}</Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className={styles.description_section}>
                    <Row>
                        <Col className={styles.description_section_title} xs={12}>COIN BIO</Col>
                        <Col xs={12}>{props.coin.description}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default coinBody
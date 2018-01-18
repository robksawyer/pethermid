/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import s from './Home.css';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import pyramid from './golden-triangle.png';

class Home extends Component {
  // static propTypes = {
  //   news: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       title: PropTypes.string.isRequired,
  //       link: PropTypes.string.isRequired,
  //       content: PropTypes.string,
  //     }),
  //   ).isRequired,
  // };

  state = {
    value: '0xa3c8F3253B6098C4140F53D29009F3CfA6FA8f3b',
    copied: false,
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value, copied: false });
  };

  onCopy = () => {
    this.setState({ copied: true });
  };

  render() {
    return (
      <div className="outer">
        <div className={`${s.banner} pv5`}>
          <h1 className={`${s.bannerTitle} white`}>
            P<img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="ether"
            />mid
          </h1>
          <p className={s.bannerDesc}>
            A distributed pyramid of Ethereum coins.
          </p>
        </div>
        <div className={s.root}>
          <div className={s.container}>
            <div className={s.details}>
              <div className="lh-title f2 sans-serif pt3">
                Send coin(s) to following address to get started.
              </div>
              <small className={'silver f6 dib pb3'}>If you send less than one(1) coin, we consider it a donation. And we don't have time for refunds.</small>
              {this.state.copied ? (
                <div style={{ color: 'green' }}>Copied!</div>
              ) : (
                <div>Click address to copy.</div>
              )}
              <div>
                <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
                  <span className={s.address}>{this.state.value}</span>
                </CopyToClipboard>
              </div>
              <div className={s.qr}>
                <img
                  style={{
                    width: '135px',
                    height: '135px',
                  }}
                  src="data:image/png;base64,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"
                  alt="Uh oh? Something went wrong."
                />
              </div>
            </div>
            {/* {this.props.news.map(item => (
              <article key={item.link} className={s.newsItem}>
                <h1 className={s.newsTitle}>
                  <a href={item.link}>{item.title}</a>
                </h1>
                <div
                  className={s.newsDesc}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </article>
            ))} */}
          </div>
        </div>
        <div className={`${s.how} cf ph5 pv4`}>
          <div className={'fl w-50'}>
            <div className="lh-title f2 fw3 sans-serif pv2 white">
              How does the coin pyramid work?
            </div>
            <ol className="sans-serif list pl0 f5 fw2">
              <li>
                &bull; Accept desired amount of Ethereum coin(s) via QR code or link. Minimum is one(1) coin. <span className={'fw6'}>If you send less, we keep as donation.</span>
              </li>
              <li>&bull; Process six(6) new transactions randomly and log the hash the transaction was delivered from.</li>
              <li>&bull; Randomly remove one hash from the stack. This is how you get more money!</li>
              <li>
                &bull; Add the total Ethereum collected from the transactions. Math!
              </li>
              <li>
                &bull; Remove the 2% transaction fee.&nbsp;Why? For coin distribution and running service.
              </li>
              <li>&bull; Divide the rest of the Ethereum coins among the remaining hashes.</li>
              <li>
                &bull; Distribute coins to the hashes (users) who were participants in the transaction group.
              </li>
              <li>
                &bull; You potentially get more Ethereum than you originally invested.
              </li>
              <li className="pv3 fw3 f4">
                <span className="fw4">No refunds.</span>&nbsp;
                <span className="fw5">Play at your own risk.</span>&nbsp;
                <span className="fw6">No guarantees of any kind.</span>
                <span className="fw6">No complaining.</span>
                <span className="fw6">Just be happy and have fun.</span>
              </li>
            </ol>
          </div>
          <div className={'fl w-50'}>
            <img src={pyramid} alt="pyramid" className={'pl6 pv4'} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

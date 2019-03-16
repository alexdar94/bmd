import React, { Component } from 'react';

export class Q2 extends Component {
  render() {
    const {
      A, B1, B2, C, AX, AY, AM, CY,
    } = this.props;
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 50 200 85"
        version="1.1"
        id="svg8"
      >
        <g id="layer1">
          <rect
            id="rect10"
            width="111.62319"
            height="4.3547544"
            x="38.244381"
            y="96.759087"
            style={{ strokeWidth: 0.22497332 }}
          />
          <path
            style={{
              fill: 'none', stroke: '#ff0101', strokeWidth: '0.18712629px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.772826,96.306812 96.829484,87.43446"
            id="path4579"
          />
          <path
            style={{
              fill: 'none', stroke: '#ff0101', strokeWidth: '0.17108966px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.857374,96.309038 90.759049,87.632686"
            id="path4581"
          />
          {A === 'P' && B1 === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 38.353177,116.99397"
            id="path4629"
          />
          )}
          {A === 'N' && B1 === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26398247px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 37.942498,82.120208 93.785557,116.89467"
            id="path4631"
          />
          )}
          {B2 === 'N' && C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 149.9382,117.12761"
            id="path4635"
          />
          )}
          {(B1 === 'N' || B2 === 'N') && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 93.738093,81.931546 -10e-6,17.289005"
            id="path882"
          />
          )}
          {(B1 === 'P' || B2 === 'P') && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,99.220551 93.738093,117.12761"
            id="path884"
          />
          )}
          {AY === 'N' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.18712629px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 35.296518,125.86632 3.056659,-8.87235"
            id="path4579-4"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.17108966px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="m 41.451502,125.67032 -3.098325,-8.67635"
              id="path4581-7"
            />]}
          {AY && AY !== 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.26615685px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="m 38.353177,116.99397 0.265695,19.99638"
            id="path4688"
          />
          )}
          <path
            style={{
              fill: '#e3dbdb', stroke: '#ff0101', strokeWidth: '0.26615685px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="m 93.507131,76.310433 0.265695,19.996379"
            id="path4688-1"
          />
          {AY === 'P' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.17108966px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 38.618872,136.99035 35.520547,128.314"
            id="path4581-7-6"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.18712629px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="M 38.618872,136.99035 41.675531,128.118"
              id="path4579-4-6"
            />]}
          {AX === 'P' && [<path
            key="1"
            style={{
              fill: '#800080', stroke: '#d101ff', strokeWidth: '0.15448797px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="M 6.9959026,99.500637 26.994223,99.220548"
            id="path4735"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.2318493px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
              }}
              d="M 26.994223,99.220548 17.056287,96.24009"
              id="path4737"
            />,
            <path
              key="3"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.23327489px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
              }}
              d="m 26.994223,99.220548 -9.939068,2.977772"
              id="path4739"
            />]}
          <path
            style={{
              fill: 'none', stroke: '#000000', strokeWidth: '0.2155382px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 21.142151,49.172886 0.284535,14.994393"
            id="path4741"
          />
          <path
            style={{
              fill: 'none', stroke: '#000000', strokeWidth: '0.24787827px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 21.142126,49.164534 14.999268,0.08042"
            id="path847"
          />
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '6.14410448px', lineHeight: 1.25, letterSpacing: '0px', wordSpacing: '0px', fill: '#000000', fillOpacity: '1', stroke: 'none', strokeWidth: 0.15360261,
            }}
            x="21.378653"
            y="62.87896"
            id="text851"
            transform="scale(0.91741562,1.0900185)"
          >
            <tspan
              id="tspan849"
              x="21.378653"
              y="62.87896"
              style={{ strokeWidth: 0.15360261 }}
            >y
            </tspan>
          </text>
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '7.18187237px', lineHeight: 1.25, letterSpacing: '0px', wordSpacing: '0px', fill: '#000000', fillOpacity: 1, stroke: 'none', strokeWidth: 0.1795468,
            }}
            x="47.766041"
            y="41.096096"
            id="text855"
            transform="scale(0.7834132,1.2764656)"
          >
            <tspan
              id="tspan853"
              x="47.766041"
              y="41.096096"
              style={{ strokeWidth: 0.1795468 }}
            >x
            </tspan>
          </text>
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '6.144104px', lineHeight: 1.25, letterSpacing: '0px', wordSpacing: '0px', fill: '#00fe00', fillOpacity: '1', stroke: 'none', strokeWidth: 0.15360261,
            }}
            x="42.060078"
            y="87.839294"
            id="text851-3"
            transform="scale(0.91741562,1.0900185)"
          >
            <tspan
              id="tspan849-0"
              x="42.060078"
              y="87.839294"
              style={{ fill: '#00fe00', fillOpacity: '1', strokeWidth: 0.15360261 }}
            >1
            </tspan>
          </text>
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '6.144104px', lineHeight: '1.25', letterSpacing: '0px', wordSpacing: '0px', fill: '#00fe00', fillOpacity: '1', stroke: 'none', strokeWidth: 0.15360261,
            }}
            x="104.45924"
            y="88.155914"
            id="text851-3-8"
            transform="scale(0.91741562,1.0900185)"
          >
            <tspan
              id="tspan849-0-8"
              x="104.45924"
              y="88.155914"
              style={{ fill: '#00fe00', fillOpacity: '1', strokeWidth: 0.15360261 }}
            >2
            </tspan>
          </text>
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '6.144104px', lineHeight: '1.25', letterSpacing: '0px', wordSpacing: '0px', fill: '#00fe00', fillOpacity: '1', stroke: 'none', strokeWidth: 0.15360261,
            }}
            x="163.58139"
            y="-83.342079"
            id="text851-3-2"
            transform="scale(0.91741562,-1.0900185)"
          >
            <tspan
              id="tspan849-0-0"
              x="163.58139"
              y="-83.342079"
              style={{ fill: '#00fe00', fillOpacity: '1', strokeWidth: 0.15360261 }}
            >3
            </tspan>
          </text>
          <rect
            style={{
              fill: '#ff0000', fillOpacity: '1', stroke: '#000000', strokeWidth: 0.34469277, strokeOpacity: 0.94117647,
            }}
            id="rect860"
            width="4.8113303"
            height="15.119047"
            x="33.175278"
            y="91.758926"
          />
          {AM && AM !== 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 7.7485117,91.758928 c -1.584408,0.246594 -3.084605,1.007413 -4.2196867,2.139997 -1.1350816,1.132584 -1.8992031,2.631102 -2.1492864,4.214963 -0.2500834,1.583861 0.015159,3.244912 0.7460622,4.672122 0.730903,1.42721 1.923703,2.61324 3.355054,3.33601 0.7685162,0.38807 1.6031064,0.64486 2.4568451,0.75596"
            id="path867"
          />
          )}
          {AM === 'P' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.2216191px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 7.7489831,91.837537 2.4563738,92.341779"
            id="path871"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.25661191px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="M 7.7485117,91.758928 5.1040023,96.02759"
              id="path875"
            />]}
          {AM === 'N' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 7.9374999,106.87798 -2.7403274,-3.3073"
            id="path879"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="m 7.9374999,106.87798 -5.1026784,0.0945"
              id="path883"
            />]}
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '4.73450422px', lineHeight: '1.25', letterSpacing: '0px', wordSpacing: '0px', fill: '#000000', fillOpacity: '1', stroke: 'none', strokeWidth: 0.11836261,
            }}
            x="167.06334"
            y="44.296875"
            id="text855-5"
            transform="scale(0.85997825,1.1628201)"
          >
            <tspan
              id="tspan853-5"
              x="167.06334"
              y="44.296875"
              style={{ strokeWidth: 0.11836261 }}
            >EX: 2/5
            </tspan>
          </text>
          {CY === 'N' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.18712629px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 146.88155,125.99996 3.05665,-8.87235"
            id="path4579-4-4"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.17108966px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="m 153.03653,125.80396 -3.09833,-8.67635"
              id="path4581-7-8"
            />]}
          {CY && CY !== 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.26615685px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="m 149.9382,117.12761 0.2657,19.99638"
            id="path4688-8"
          />
          )}
          {CY === 'P' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.17108966px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 150.2039,137.12399 -3.09833,-8.67635"
            id="path4581-7-6-3"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.18712629px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="m 150.2039,137.12399 3.05666,-8.87235"
              id="path4579-4-6-2"
            />]}
          {A === 'N' && B1 === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 37.942715,82.120535 93.738093,81.931546"
            id="path866"
          />
          )}
          {B2 === 'N' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 H 150.05655"
            id="path868"
          />
          )}
          {B2 === 'P' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 150.05655,81.931546 93.785551,116.89467"
            id="path880"
          />
          )}
          {C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 150.05655,81.931546 -10e-6,17.289005"
            id="path882"
          />
          )}
          {C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 150.05654,99.220551 149.9382,117.12761"
            id="path884"
          />
          )}
          {B2 === 'P' && C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 149.9382,117.12761 93.785557,116.89467"
            id="path886"
          />
          )}
          {A === 'P' && B1 === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 93.785549,116.89467 -55.432372,0.0993"
            id="path888"
          />
          )}
          {A === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 37.942715,82.120535 0.276826,17.100016"
            id="path890"
          />
          )}
          {A === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 38.219541,99.220551 0.133636,17.773419"
            id="path892"
          />
          )}
          {A === 'N' && B1 === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 37.942715,82.120535 93.811602,99.318449"
            id="path876"
          />
          )}
          {A === 'Z' && B1 === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 38.228748,99.318449"
            id="path878"
          />
          )}
          {A === 'P' && B1 === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.811602,99.318449 38.353177,116.99397"
            id="path881"
          />
          )}
          {A === 'Z' && B1 === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 38.228748,99.318449 93.785549,116.89467"
            id="path885"
          />
          )}
          {B2 === 'N' && C === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 150.05654,99.220551"
            id="path887"
          />
          )}
          {B2 === 'Z' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 150.05655,81.931546 93.811602,99.318449"
            id="path889"
          />
          )}
          {B2 === 'Z' && C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.811602,99.318449 149.9382,117.12761"
            id="path891"
          />
          )}
          {B2 === 'P' && C === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 150.05654,99.220551 93.785549,116.89467"
            id="path893"
          />
          )}
        </g>
      </svg>
    );
  }
}

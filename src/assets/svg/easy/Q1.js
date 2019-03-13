import React, { Component } from 'react';

export class Q1 extends Component {
  render() {
    const {
      A, B1, B2, C, AX, AY, CY,
    } = this.props;
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 50 200 85"
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
              fill: '#ff0000', stroke: '#000000', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, fillOpacity: 1,
            }}
            d="m 35.057291,106.68899 3.187089,-5.57514 3.805471,5.57514"
            id="path30"
          />
          <path
            style={{
              fill: '#ff0101', stroke: '#000000', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1, fillOpacity: 1,
            }}
            d="m 146.68048,106.68899 3.18709,-5.57514 3.80547,5.57514"
            id="path30-4"
          />
          <circle
            style={{
              fill: '#ffcc00', strokeWidth: '0.26458332', stroke: '#000000', strokeOpacity: 1,
            }}
            id="path51-1"
            cx="151.96263"
            cy="108.2009"
            r="1.2756697"
          />
          <circle
            style={{
              fill: '#ffcc00', stroke: '#000000', strokeWidth: 0.26458332, strokeOpacity: 1,
            }}
            id="path51-1-5"
            cx="147.97768"
            cy="108.2009"
            r="1.2756697"
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
          <path
            style={{
              fill: '#e3dbdb', stroke: '#ff0101', strokeWidth: '0.26615685px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="m 93.507131,76.310433 0.265695,19.996379"
            id="path4688-1"
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
          {AX === 'P' && (
          <path
            style={{
              fill: '#800080', stroke: '#d101ff', strokeWidth: '0.15448797px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="M 6.9959026,99.500637 26.994223,99.220548"
            id="path4735"
          />
          )}
          {AX === 'P' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.2318493px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="M 26.994223,99.220548 17.056287,96.24009"
            id="path4737"
          />,
            <path
              key="2"
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
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '6.14410448px', lineHeight: 1.25, fontFamily: 'sans-serif', letterSpacing: '0px', wordSpacing: '0px', fill: '#000000', fillOpacity: 1, stroke: 'none', strokeWidth: 0.15360261,
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
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '7.18187237px', lineHeight: 1.25, fontFamily: 'sans-serif', letterSpacing: '0px', wordSpacing: '0px', fill: '#000000', fillOpacity: 1, stroke: 'none', strokeWidth: 0.1795468,
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
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '6.144104px', lineHeight: 1.25, fontFamily: 'sans-serif', letterSpacing: '0px', wordSpacing: '0px', fill: '#00fe00', fillOpacity: 1, stroke: 'none', strokeWidth: 0.15360261,
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
              style={{ fill: '#00fe00', fillOpacity: 1, strokeWidth: 0.15360261 }}
            >1
            </tspan>
          </text>
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '6.144104px', lineHeight: 1.25, fontFamily: 'sans-serif', letterSpacing: '0px', wordSpacing: '0px', fill: '#00fe00', fillOpacity: 1, stroke: 'none', strokeWidth: 0.15360261,
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
              style={{ fill: '#00fe00', fillOpacity: 1, strokeWidth: 0.15360261 }}
            >2
            </tspan>
          </text>
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '6.144104px', lineHeight: 1.25, fontFamily: 'sans-serif', letterSpacing: '0px', wordSpacing: '0px', fill: '#00fe00', fillOpacity: 1, stroke: 'none', strokeWidth: 0.15360261,
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
              style={{ fill: '#00fe00', fillOpacity: 1, strokeWidth: 0.15360261 }}
            >3
            </tspan>
          </text>
          {CY && CY !== 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.26615685px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="m 149.9382,117.12761 0.26569,19.99638"
            id="path4688-7"
          />
          )}
          {CY === 'N' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.18712629px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 146.88154,125.99996 3.05666,-8.87235"
            id="path4579-4-0"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.17108966px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="m 153.03652,125.80396 -3.09832,-8.67635"
              id="path4581-7-8-5"
            />]}
          {CY === 'P' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.18712629px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 150.20389,137.12399 3.05666,-8.87235"
            id="path4579-4-9"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.17108966px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="m 150.20389,137.12399 -3.09833,-8.67635"
              id="path4581-7-8"
            />]}
          <text
            style={{
              fontStyle: 'normal', fontWeight: 'normal', fontSize: '4.73450422px', lineHeight: 1.25, fontFamily: 'sans-serif', letterSpacing: '0px', wordSpacing: '0px', fill: '#000000', fillOpacity: 1, stroke: 'none', strokeWidth: 0.11836261,
            }}
            x="166.62383"
            y="43.789581"
            id="text855-5"
            transform="scale(0.85997825,1.1628201)"
          >
            <tspan
              id="tspan853-5"
              x="166.62383"
              y="43.789581"
              style={{ strokeWidth: 0.11836261 }}
            >EX: 1/5
            </tspan>
          </text>
          <path
            style={{
              fill: 'none', stroke: '#000000', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 35.057291,106.68899 H 42.04985"
            id="path858"
          />
          <path
            style={{
              fill: 'none', stroke: '#000000', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 146.68048,106.68899 h 6.99256"
            id="path860"
          />
          {A === 'N' && B1 === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 37.942715,82.120535 93.738093,81.931546"
            id="path865"
          />
          )}
          {B2 === 'N' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 H 150.05655"
            id="path867"
          />
          )}
          {B2 === 'P' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 150.05655,81.931546 93.785551,116.89467"
            id="path869"
          />
          )}
          {C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 149.87139,99.08691 0.0668,18.0407"
            id="path873"
          />
          )}
          {C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 149.87139,99.08691 0.18516,-17.155364"
            id="path875"
          />
          )}
          {(B1 === 'P' || B2 === 'P') && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 93.785557,116.89467 0.02604,-17.80776"
            id="path877"
          />
          )}
          {(B1 === 'N' || B2 === 'N') && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 93.738093,81.931546 0.0735,17.155364"
            id="path881"
          />
          )}
          {A === 'P' && B1 === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 38.353177,116.99397 55.432372,-0.0993"
            id="path883"
          />
          )}
          {B2 === 'P' && C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 93.785549,116.89467 56.152641,0.23294"
            id="path885"
          />
          )}
          {A === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 37.942498,82.120207 38.246465,99.08691"
            id="path887"
          />
          )}
          {A === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 38.246465,99.08691 0.106712,17.90706"
            id="path889"
          />
          )}
          {A === 'Z' && B1 === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 38.27009,99.487809 93.785549,116.89467"
            id="path868"
          />
          )}
          {A === 'Z' && B1 === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 38.27009,99.487809"
            id="path870"
          />
          )}
          {A === 'N' && B1 === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 37.942715,82.120535 93.814872,99.487809"
            id="path872"
          />
          )}
          {A === 'P' && B1 === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.81487,99.487809 38.353177,116.99397"
            id="path874"
          />
          )}
          {B2 === 'N' && C === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 149.84394,99.487809"
            id="path876"
          />
          )}
          {B2 === 'Z' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.81487,99.487809 150.05655,81.931546"
            id="path878"
          />
          )}
          {B2 === 'Z' && C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 93.81487,99.487809 56.12332,17.639801"
            id="path880"
          />
          )}
          {B2 === 'P' && C === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 149.84394,99.487809 93.785557,116.89467"
            id="path882"
          />
          )}
        </g>
      </svg>
    );
  }
}

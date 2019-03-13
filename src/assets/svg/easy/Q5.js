import React, { Component } from 'react';

export class Q5 extends Component {
  render() {
    const {
      A, B1, B2, C, AX, AY, AM, CY,
    } = this.props;
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 45 190 90"
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
              fill: '#ffcc00', stroke: '#000000', strokeWidth: '0.26458332', strokeOpacity: 1,
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
            d="M 37.942492,82.120208 93.785551,116.89467"
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
          <path
            style={{
              fill: '#e3dbdb', stroke: '#ff0101', strokeWidth: '0.26615685px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 0.94117647,
            }}
            d="m 93.507131,76.310433 0.265695,19.996379"
            id="path4688-1"
          />
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
            x="167.23544"
            y="44.147202"
            id="text855-5"
            transform="scale(0.85997826,1.1628201)"
          >
            <tspan
              id="tspan853-5"
              x="167.23544"
              y="44.147202"
              style={{ strokeWidth: 0.11836261 }}
            >EX: 5/5
            </tspan>
          </text>
          <rect
            style={{
              fill: '#ff0000', fillOpacity: 1, stroke: '#000000', strokeWidth: '0.26458332', strokeOpacity: 1,
            }}
            id="rect870"
            width="5.8586307"
            height="9.0714283"
            x="32.127975"
            y="92.136902"
          />
          {AM && AM !== 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 10.710643,91.521912 c -1.5844076,0.246594 -3.0846044,1.007412 -4.2196858,2.139996 -1.1350815,1.132584 -1.8992029,2.631101 -2.1492863,4.214962 -0.2500834,1.58386 0.015159,3.24491 0.7460618,4.67212 0.7309027,1.42721 1.9237023,2.61324 3.355053,3.33601 0.7685162,0.38807 1.6031063,0.64487 2.4568453,0.75596"
            id="path867"
          />
          )}
          {AM === 'P' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.2216191px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 10.711114,91.600522 -5.2926093,0.50424"
            id="path871"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.25661191px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="m 10.710643,91.521912 -2.6445103,4.26866"
              id="path875"
            />]}
          {AM === 'N' && [<path
            key="1"
            style={{
              fill: 'none', stroke: '#d101ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 10.899631,106.64096 -2.7403283,-3.3073"
            id="path879"
          />,
            <path
              key="2"
              style={{
                fill: 'none', stroke: '#d101ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
              }}
              d="m 10.899631,106.64096 -5.1026793,0.0945"
              id="path883"
            />]}
          {B2 === 'N' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 H 150.05655"
            id="path868"
          />
          )}
          {A === 'N' && B1 === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 37.942498,82.120207"
            id="path870"
          />
          )}
          {B2 === 'P' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 150.05655,81.931546 93.785551,116.89467"
            id="path874"
          />
          )}
          {(B1 === 'N' || B2 === 'N') && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 93.738093,81.931546 0.0067,17.197914"
            id="path880"
          />
          )}
          {(B1 === 'P' || B2 === 'P') && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.785557,116.89467 93.744792,99.12946"
            id="path882"
          />
          )}
          {C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 150.05655,81.931546 -0.3188,17.197914"
            id="path876"
          />
          )}
          {C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 149.9382,117.12761 149.73775,99.12946"
            id="path884"
          />
          )}
          {A === 'P' && B1 === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 38.353177,116.99397 55.43238,-0.0993"
            id="path886"
          />
          )}
          {B2 === 'P' && C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 149.9382,117.12761 93.785549,116.89467"
            id="path888"
          />
          )}
          {A === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 38.353177,116.99397 38.219541,99.12946"
            id="path892"
          />
          )}
          {A === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 37.94249,82.120207 38.219541,99.12946"
            id="path894"
          />
          )}
          {A === 'N' && B1 === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 37.942498,82.120207 93.744792,99.12946"
            id="path877"
          />
          )}
          {A === 'Z' && B1 === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 38.219541,99.12946"
            id="path881"
          />
          )}
          {A === 'Z' && B1 === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="m 38.219541,99.12946 55.566008,17.76521"
            id="path885"
          />
          )}
          {A === 'P' && B1 === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.74479,99.12946 38.353177,116.99397"
            id="path887"
          />
          )}
          {B2 === 'Z' && C === 'P' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.744792,99.12946 149.9382,117.12761"
            id="path889"
          />
          )}
          {B2 === 'P' && C === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 149.73775,99.12946 93.785549,116.89467"
            id="path891"
          />
          )}
          {B2 === 'Z' && C === 'N' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 150.05655,81.931546 93.74479,99.12946"
            id="path893"
          />
          )}
          {B2 === 'N' && C === 'Z' && (
          <path
            style={{
              fill: 'none', stroke: '#0000ff', strokeWidth: '0.26458332px', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeOpacity: 1,
            }}
            d="M 93.738093,81.931546 149.73775,99.12946"
            id="path895"
          />
          )}
        </g>
      </svg>
    );
  }
}

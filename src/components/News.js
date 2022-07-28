import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: "BBC Sport",
      title: "Shane Warne memorial - watch & follow updates",
      description:
        "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
      url: "http://www.bbc.co.uk/sport/live/cricket/60916236",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      publishedAt: "2022-03-30T08:22:26.498888Z",
      content:
        "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "ESPN",
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: {
        id: "the-irish-times",
        name: "The Irish Times",
      },
      author: "Kurt Wagner",
      title:
        "Twitter to pare back Dublin office space as part of global cost-cutting plan",
      description:
        "No jobs will be lost as a result of the move, the company told employees in an email sent on Wednesday.",
      url: "https://www.irishtimes.com/business/2022/07/28/twitter-to-pare-back-dublin-office-space-as-part-of-global-cost-cutting-plan/",
      urlToImage:
        "https://www.irishtimes.com/resizer/_lqLIems8yqwK9pZL6kBt_2tck0=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/HDO6JOBDLX2YTVM2FBG6WHJW4M.jpg",
      publishedAt: "2022-07-28T09:02:02Z",
      content:
        "Twitter is planning to scale back its Dublin office space as part of a global push to cut costs.\r\nThe social media company will reduce the size of its European headquarters at 1 Cumberland Street in … [+2066 chars]",
    },
    {
      source: {
        id: null,
        name: "Gadgets360.com",
      },
      author: "Reuters",
      title:
        "Rivian Plans to Cut Headcount by 6 Percent to Optimise Costs: All Details",
      description:
        "Rivian will cut its headcount by 6 percent, the electric truck maker said on Wednesday. The company will focus on enhancing R1 and EDV (electric delivery van) and speed up the development and launch of R2 and future platforms over the next 18 months, and told…",
      url: "https://gadgets360.com/transportation/news/rivian-electric-truck-maker-cut-jobs-6-percent-optimising-costs-economic-situation-3201695",
      urlToImage:
        "https://i.gadgets360cdn.com/large/rivian_image_reuters_1636176975505.jpg",
      publishedAt: "2022-07-28T08:43:30Z",
      content:
        "Electric-truck maker Rivian Automotive said on Wednesday it was reducing headcount by 6 percent in order to optimise costs in a tightening macroeconomic environment.\r\nStaff in the manufacturing opera… [+1756 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "IANS",
      title:
        "Tesla's Autopilot system kills another motorcyclist, US begins probe",
      description:
        "A Tesla vehicle has allegedly killed another motorcyclist, this time in the Utah state in the US when a driver using Autopilot slammed into the rear of his bike.",
      url: "https://www.business-standard.com/article/technology/tesla-s-autopilot-system-kills-another-motorcyclist-us-begins-probe-122072800511_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2022-06/23/full/1655951853-0959.jpg",
      publishedAt: "2022-07-28T08:39:00Z",
      content:
        "A Tesla vehicle has allegedly killed another motorcyclist, this time in the Utah state in the US when a driver using Autopilot slammed into the rear of his bike.\r\nThe National Highway Traffic Safety … [+2798 chars]",
    },
  ];
  constructor() {
    super();
    console.log("i'm a constructor from news components");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b06f36dd8264465b8ae9bd173a3ac15e"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Todys!Updates :- Headlines of the day! </h1>
        {/* {this.state.articles.map((element)=>{console.log(element);})} */}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.urlToImage}>
                <NewsItems
                  title={element.title?element.title.slice(0, 45):""}
                  discription={element.description?element.description.slice(0,80):""}
                  imageUrl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/tech/img/2022/07/28/1600x900/jpegPIA25017_(1)_1658994714280_1659008302741_1659008302741.jpg"}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

import React, {useEffect, useState} from 'react'
import NewsComponent from './NewsComponent'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import NewsNav from './NewsNav';


const News = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
//   const [page,setPage] = useState(1)
//   const [noOfItems,setNoOfItems] = useState(0)
  let Navigate = useNavigate();

    const updateNews = async() => {
      props.setProgress(30);
      setLoading(true)
      if(props.category==='general'){
        let dataGeneral = {
            "status": "ok",
            "totalResults": 37,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "\"Fight Terrorists But Don't Hurt Countrymen\": Rajnath Singh To Army In J&K - NDTV",
                    "description": "Defence Minister Rajnath Singh arrived in Jammu today for a security review trip, days after an ambush by terrorists on Army vehicles in Poonch left four soldiers dead. Mr Singh left for Rajouri soon after reaching Jammu.",
                    "url": "https://www.ndtv.com/india-news/rajnath-singh-in-j-k-to-review-security-situation-days-after-terror-attack-4750184",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/gfhp7k2g_rajnath-singh_625x300_27_December_23.jpeg?im=FitAndFill,algorithm=dnn,width=1200,height=738?ver-20231203.06",
                    "publishedAt": "2023-12-27T15:51:00Z",
                    "content": "Rajnath Singh reached Jammu and left for Rajouri soon after\r\nJammu: Amid the row in Jammu and Kashmir over the death of three civilians after they were detained by the Army for questioning, Defence M… [+2462 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India.com"
                    },
                    "author": "Zee News Desk",
                    "title": "Highlights | IND VS SA Day 2, 1st Test Cricket Score and Updates: Dean Elgar Shines As South Africa Take 11 Runs Lead With 5 Wickets In Hand - Zee News",
                    "description": "Highlights | IND VS SA Day 2, 1st Test Cricket Score and Updates: Dean Elgar Shines As South Africa",
                    "url": "https://zeenews.india.com/cricket/live-updates/highlights-cricket-score-ind-vs-sa-1st-test-day-2-match-cricket-match-today-india-vs-south-africa-cricket-highlights-score-updates-supersport-park-centurion-rohit-sharma-virat-kohli-temba-bavuma-2702663",
                    "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/27/1341833-ind-sa-day-2.jpg",
                    "publishedAt": "2023-12-27T15:38:34Z",
                    "content": "On Day 2 of the 1st Test between South Africa and India, the match at SuperSport Park, Centurion, saw South Africa finishing the day with a lead of 11 runs. In their first innings, South Africa poste… [+647 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "Watch: Virat Kohli does Stuart Broad, his 'bails flip' act works magic for Jasprit Bumrah - Times of India",
                    "description": "Star India cricketer Virat Kohli recreated the famous 'bail switch' trick on the second day of the first Test match against South Africa in Centurion",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/watch-virat-kohli-does-stuart-broad-his-bails-flip-act-works-magic-for-jasprit-bumrah/articleshow/106328221.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106328218,width-1070,height-580,imgsize-33718,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T15:25:46Z",
                    "content": "Virat Kohli wins player of the tournament at ICC Men's Cricket World Cup 2023"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "The Indian Express",
                    "title": "UPSC Essentials | Daily subject-wise quiz — Environment, Geography, Science and Technology (Week 38) - The Indian Express",
                    "description": null,
                    "url": "https://indianexpress.com/article/upsc-current-affairs/upsc-essentials/upsc-essentials-daily-subject-wise-quiz-environment-geography-science-and-technology-week-38-9085329/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T15:18:11Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Shaju Philip",
                    "title": "To attend Ram temple event or not? Kerala Muslim outfit slams Congress’s ambivalence - The Indian Express",
                    "description": "SAMASTHA, backbone of Cong ally IUML in state, praises CPM's firm stand against temple invite; IUML, which burnt its hands on Babri issue earlier, warns Cong of “BJP trap”",
                    "url": "https://indianexpress.com/article/political-pulse/ram-temple-congress-iuml-congress-9085243/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/Untitled-design-11-2.png",
                    "publishedAt": "2023-12-27T14:34:20Z",
                    "content": "The non-committal stance of the Congress towards the invitation to attend the Pran Pratishthaor consecration ceremony of the Ram Temple in Ayodhyanext month has drawn criticism from a prominent Musli… [+4213 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Business Desk",
                    "title": "BSE Sensex crosses 72,000! Stock market rally leaves investors richer by whopping Rs 11.11 lakh crore in - IndiaTimes",
                    "description": "India Business News: Investors gained substantial wealth as the Sensex crossed the historic 72,000 mark for the first time. The Sensex rose by 0.98% to reach a record clos",
                    "url": "https://timesofindia.indiatimes.com/business/india-business/bse-sensex-crosses-72000-stock-market-rally-leaves-investors-richer-by-whopping-rs-11-11-lakh-crore-in-4-days/articleshow/106326857.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106327021,width-1070,height-580,imgsize-51294,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T13:58:58Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Financial Express"
                    },
                    "author": "The Financial Express",
                    "title": "What exactly is solar storm? As new geomagnetic disturbance set to strike Earth today, know its key features - The Financial Express",
                    "description": null,
                    "url": "https://www.financialexpress.com/life/science-what-exactly-is-solar-storm-as-new-geomagnetic-disturbance-set-to-strike-earth-today-know-its-key-features-bkg-3349066/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T13:46:57Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Ayodhya railway station in Uttar Pradesh renamed 'Ayodhya Dham Junction' | Mint - Mint",
                    "description": "Prime Minister Narendra Modi will inaugurate the grand railway station and airport in Ayodhya on December 30.",
                    "url": "https://www.livemint.com/news/india/ups-ayodhya-railway-station-renamed-to-ayodhya-dham-junction-uttar-pradesh-ram-mandi-11703684702656.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/Ayodhya_Railway_station__1703686188110_1703686188496.jpeg",
                    "publishedAt": "2023-12-27T13:46:03Z",
                    "content": "Ahead of the inauguration of the Ram temple in Ayodhya, the city's Ayodhya Junction railway station has been renamed Ayodhya Dham Junction, announced Ayodhya's Member of Parliament Lallu Singh on soc… [+2354 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Vinesh Phogat returning Khel Ratna: ‘These tactics’ must be stopped, says Haryana minister Anil Vij | Mint - Mint",
                    "description": "Vinesh Phogat’s decision to return her awards comes days after Olympic medallist Bajrang Punia and Deafylmpics champion Virender Singh Yadav returned their Padma Shri awards",
                    "url": "https://www.livemint.com/news/india/vinesh-phogat-returning-khel-ratna-these-tactics-must-be-stopped-says-haryana-minister-anil-vij-11703677693834.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/vineshphogat_1703678025133_1703678025337.jpg",
                    "publishedAt": "2023-12-27T13:39:50Z",
                    "content": "On wrestler Vinesh Phogat returning her Khel Ratna Award to protest against the Wrestling Federation of India (WFI), Haryana Home Minister Anil Vij on Wednesday said that these tactics of returning a… [+2500 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "Covid-19 Tracker Live: Delhi reports first case of COVID-19 sub-variant JN.1: Officials - Moneycontrol",
                    "description": "States asked to ensure effective compliance with operational guidelines for the revised surveillance strategy for Covid-19 shared by Centre.",
                    "url": "https://www.moneycontrol.com/news/india/covid-19-cases-in-india-updates-sub-variant-jn-1-who-advice-precautionary-measures-3-11963831.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/04/10-covid-mock-drill-770x433.jpg",
                    "publishedAt": "2023-12-27T13:08:25Z",
                    "content": "Delhi reported first case of COVID-19 sub-variant JN.1, according to officials, reported news agency PTI.\r\nDelhi reports the first case of JN.1, a Sub-Variant of Omicron. Out of the 3 samples sent fo… [+3167 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "India Today Entertainment Desk",
                    "title": "Ankita Lokhande's mother reacts to viral video of Vicky Jain trying to slap her - India Today",
                    "description": "Ankita Lokhande's mother, Vandana, has reacted to the viral video of Vicky Jain trying to slap his wife. The couple often grab the limelight for their aggressive fights.",
                    "url": "https://www.indiatoday.in/television/reality-tv/story/ankita-lokhande-mother-vandana-reacts-to-viral-video-of-vicky-jain-slap-bigg-boss-17-2481161-2023-12-27",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/ankita-lokhandes-mother-reacts-to-viral-slap-video-featuring-vicky-jain-275150275-16x9_0.png?VersionId=h.xlxsoKYc2v1Z6r0vNSQK2RTHB6tIxF",
                    "publishedAt": "2023-12-27T13:07:01Z",
                    "content": "Ankita Lokhande and Vicky Jain are the newsmakers of ‘Bigg Boss 17’. From their lovey-dovey moments to their nasty fights, every action of the couple grabs an instant spotlight. Recently, a video of … [+1917 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Entertainment Desk",
                    "title": "Salaar box office collection day 6 early report: Prabhas film set to cross Rs 300 crore mark in India - The Indian Express",
                    "description": "Salaar box office collection day 6 early estimates: After surpassing Jawan to become the biggest opener of 2023, Prabhas-starrer Salaar has experienced a gradual decline in its collections.",
                    "url": "https://indianexpress.com/article/entertainment/bollywood/salaar-box-office-collection-day-6-early-report-prabhas-film-set-to-cross-rs-300-crore-mark-in-india-9085021/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/salaar-collection-day-6-1600.jpeg",
                    "publishedAt": "2023-12-27T13:03:23Z",
                    "content": "Prabhas is concluding the year 2023 on a high note with his latest film, Salaar: Part 1 Ceasefire, breaking many box office records. After surpassing Jawan to become the biggest opener of 2023, Salaa… [+1737 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Bengaluru: Starbucks, House of Masaba stores targeted by pro-Kannada protesters - Hindustan Times",
                    "description": "Karnataka Rakshana Vedike (KRV), a pro-Kannada body, on Wednesday held a massive protest in Bengaluru. | Bengaluru News",
                    "url": "https://www.hindustantimes.com/cities/bengaluru-news/bengaluru-starbucks-house-of-masaba-stores-targeted-by-pro-kannada-protesters-101703681490203.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/ANI-20231227230-0_1703681562008_1703681598252.jpg",
                    "publishedAt": "2023-12-27T12:54:52Z",
                    "content": "More than 20 shops were vandalised in Bengaluru as pro-Kannada groups protested in the city on Wednesday. They were demanding that local businesses follow the government's rule mandating 60 percent o… [+1799 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Banks' asset quality touches decadal high as GNPA ratio falls to 3.2% in September quarter: RBI Report | Mint - Mint",
                    "description": "The improvement in the asset quality of banks that began in 2018-19 continued into the first half of 2023-24, with the GNPA ratio falling to 3.2 per cent at end-September from 3.9 per cent at end-March",
                    "url": "https://www.livemint.com/industry/banking/banks-asset-quality-touches-decadal-high-as-gnpa-ratio-falls-to-3-2-in-september-quarter-rbi-report-11703680334343.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/a87131bc-ba50-11eb-b2e0-990fd466194c_1621617732588_1703680357352.jpg",
                    "publishedAt": "2023-12-27T12:37:22Z",
                    "content": "The gross non-performing asset (GNPA) ratio of Indian banks continued to improve in the second quarter of the current financial year, easing to a fresh decadal low, according to a Reserve Bank of Ind… [+3155 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "‘We left a great trace…’, Kim Jong Un's boasts of North Korea’s achievements at key year-end meet | Mint - Mint",
                    "description": "Kim Jong Un, the supreme leader of North Korea, praised Pyongyang's achievements and victories in 2023 as he opened a key political meeting to set new policy goals for 202",
                    "url": "https://www.livemint.com/news/world/we-left-a-great-trace-kim-jong-uns-boasts-of-north-korea-s-achievements-at-key-year-end-meet-11703679795121.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/Kim_Jong_Un_1703679990904_1703679991123.jpg",
                    "publishedAt": "2023-12-27T12:33:01Z",
                    "content": "Kim Jong Un, the supreme leader of North Korea, praised Pyongyang's achievements and victories in 2023 as he opened a key political meeting to set new policy goals for 2024, state media reported on W… [+2348 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "ABC Juice: 5 Health Benefits Of The Apple, Beetroot And Carrot Combination - NDTV",
                    "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
                    "url": "https://www.ndtv.com",
                    "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
                    "publishedAt": "2023-12-27T12:30:31Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Is COVID-19 Becoming A Seasonal Influenza? Takeaways From The Propagation Of JN.1 - DNAIndiaNews",
                    "description": "Is COVID-19 Becoming A Seasonal Influenza? Takeaways from the propagation of JN.1“Scientific studies say that colder temperatures and drier air create an env...",
                    "url": "https://www.youtube.com/watch?v=ca__Q9MTIxE",
                    "urlToImage": "https://i.ytimg.com/vi/ca__Q9MTIxE/maxresdefault.jpg",
                    "publishedAt": "2023-12-27T12:10:44Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": "Reuters",
                    "title": "Humanoid robots in space: the next frontier - Reuters",
                    "description": null,
                    "url": "https://www.reuters.com/science/humanoid-robots-space-next-frontier-2023-12-27/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T12:08:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "Adani Total Gas signs MoU to help Flipkart's efforts to decarbonise its supply chain - Moneycontrol",
                    "description": "Adani Total Energies E-Mobility Limited (ATEL) will install EV charging infrastructure throughout Flipkart's pan-India supply chain, including warehouses and logistical facilities",
                    "url": "https://www.moneycontrol.com/news/business/adani-total-gas-signs-mou-to-help-flipkarts-efforts-to-decarbonise-its-supply-chain-11963251.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/03/Collage-Maker-27-Mar-2023-11-56-AM-1558-770x433.jpg",
                    "publishedAt": "2023-12-27T12:03:34Z",
                    "content": "Adani Total Gas Limited (ATGL), the energy and city gas distribution firm of the Adani Group, and Flipkart on December 27 announced the signing of a Memorandum of Understanding (MoU) on reducing carb… [+1341 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Happy Birthday Salman Khan: From Aamir Khan to Varun Dhawan, Bollywood stars share all things sweet for B - IndiaTimes",
                    "description": "Salman Khan's 58th birthday celebration has become a social media phenomenon, captivating fans and industry members alike. The hashtag #HappyBirthdayS",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/happy-birthday-salman-khan-from-aamir-khan-to-varun-dhawan-bollywood-stars-share-all-things-sweet-for-bhaijaan/articleshow/106323981.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106324039,width-1070,height-580,imgsize-55380,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T12:02:51Z",
                    "content": "Bollywood wishes Salman Khan on his birthday; Karan Johar reveals how he 'got perfect Aman' for his debut movie 'KKHH'"
                }
            ]
        }
        setArticles(dataGeneral.articles)
        setLoading(false)
        props.setProgress(100);
      }
      else if(props.category==='business'){
        let dataBusiness = {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Business Desk",
                    "title": "BSE Sensex crosses 72,000! Stock market rally leaves investors richer by whopping Rs 11.11 lakh crore in - IndiaTimes",
                    "description": "India Business News: Investors gained substantial wealth as the Sensex crossed the historic 72,000 mark for the first time. The Sensex rose by 0.98% to reach a record clos",
                    "url": "https://timesofindia.indiatimes.com/business/india-business/bse-sensex-crosses-72000-stock-market-rally-leaves-investors-richer-by-whopping-rs-11-11-lakh-crore-in-4-days/articleshow/106326857.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106327021,width-1070,height-580,imgsize-51294,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T13:58:58Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Maulik M",
                    "title": "SEBI extends Dec 31 deadline for mutual fund and demat account nomination - Moneycontrol",
                    "description": "Now, investors have time until June 30, 2024 to complete their nomination. That is, they must either select a nominee or opt out of nomination for their mutual fund folios and demat accounts by the due date.",
                    "url": "https://www.moneycontrol.com/news/business/personal-finance/sebi-extends-dec-31-deadline-for-mutual-fund-and-demat-account-nomination-11964021.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/03/sebi-770x433.png",
                    "publishedAt": "2023-12-27T13:50:09Z",
                    "content": "With barely a few days left for the December 31 deadline for mutual fund (MF) and stock market investors to complete nomination for their investments, the securities market regulator SEBI yet again e… [+1473 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "RBI approves appointment of C S Rajan as chairman of Kotak Mahindra Bank for two years | Mint - Mint",
                    "description": "RBI approves appointment of C S Rajan as chairman of Kotak Mahindra Bank.",
                    "url": "https://www.livemint.com/industry/banking/rbi-approves-appointment-of-c-s-rajan-as-chairman-of-kotak-mahindra-bank-11703682878601.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/Kotak_Mahindra_1703684421873_1703684422108.jpg",
                    "publishedAt": "2023-12-27T13:16:46Z",
                    "content": "Kotak Mahindra Bank, on December 27, announced that the Reserve Bank of India (RBI) has granted approval for the appointment of C S Rajan, who currently serves as an Independent Director of the bank,… [+2836 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Banks' asset quality touches decadal high as GNPA ratio falls to 3.2% in September quarter: RBI Report | Mint - Mint",
                    "description": "The improvement in the asset quality of banks that began in 2018-19 continued into the first half of 2023-24, with the GNPA ratio falling to 3.2 per cent at end-September from 3.9 per cent at end-March",
                    "url": "https://www.livemint.com/industry/banking/banks-asset-quality-touches-decadal-high-as-gnpa-ratio-falls-to-3-2-in-september-quarter-rbi-report-11703680334343.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/a87131bc-ba50-11eb-b2e0-990fd466194c_1621617732588_1703680357352.jpg",
                    "publishedAt": "2023-12-27T12:37:22Z",
                    "content": "The gross non-performing asset (GNPA) ratio of Indian banks continued to improve in the second quarter of the current financial year, easing to a fresh decadal low, according to a Reserve Bank of Ind… [+3155 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "Canara Bank to launch IPO of Canara Robeco AMC - Moneycontrol",
                    "description": "The lender said it will start the work on launching an IPO of Canara Robeco Asset Management Company.",
                    "url": "https://www.moneycontrol.com/news/business/markets/canara-bank-to-launch-ipo-of-canara-robeco-amc-11963661.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/01/Canara-6-698x435.jpg",
                    "publishedAt": "2023-12-27T12:33:37Z",
                    "content": "Canara Bank on December 27 said it is going to list its mutual fund subsidiary. The lender did not comment on the timeline for the same.\r\nWe wish to inform you that Canara Bank has in principle appro… [+1090 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Gaurav Laghate",
                    "title": "Kellogg's India sets sights on doubling household reach | Mint - Mint",
                    "description": "With a 75% market share in India, Kellogg's leads the breakfast cereal category, which is evenly divided between children, and adults and families",
                    "url": "https://www.livemint.com/companies/people/kelloggs-india-sets-sights-on-doubling-household-reach-11703676268228.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/K1_1703679374241_1703679379715.png",
                    "publishedAt": "2023-12-27T12:28:00Z",
                    "content": "Mumbai: Kellogg's, a prominent player in the global food industry, has set ambitious goals for India's breakfast cereal market, aiming to double its household reach in the coming years. Prashant Pere… [+3628 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "FXStreet"
                    },
                    "author": "Sagar Dua",
                    "title": "Gold set to rally as soft PCE data boosts rate cut hopes - FXStreet",
                    "description": "Gold price (XAU/USD) looks set to rally further after a significant decline in the United States core Personal Consumption Expenditure price index (PCE) in November has boosted hopes of early rate cuts by the Federal Reserve (Fed).",
                    "url": "https://www.fxstreet.com/news/gold-price-prepares-for-fresh-upside-amid-deepening-fed-rate-cut-bets-202312270922",
                    "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/Gold_Bar_XAU_Precious_Metal_Large.jpg",
                    "publishedAt": "2023-12-27T12:18:39Z",
                    "content": "<ul><li>Gold price is set to extend upside as the Fed is expected to cut rates sooner than anticipated.</li><li>The core PCE price index declined more than expected to 3.2% in November.</li><li>Actio… [+8433 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "Adani Total Gas signs MoU to help Flipkart's efforts to decarbonise its supply chain - Moneycontrol",
                    "description": "Adani Total Energies E-Mobility Limited (ATEL) will install EV charging infrastructure throughout Flipkart's pan-India supply chain, including warehouses and logistical facilities",
                    "url": "https://www.moneycontrol.com/news/business/adani-total-gas-signs-mou-to-help-flipkarts-efforts-to-decarbonise-its-supply-chain-11963251.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/03/Collage-Maker-27-Mar-2023-11-56-AM-1558-770x433.jpg",
                    "publishedAt": "2023-12-27T12:03:34Z",
                    "content": "Adani Total Gas Limited (ATGL), the energy and city gas distribution firm of the Adani Group, and Flipkart on December 27 announced the signing of a Memorandum of Understanding (MoU) on reducing carb… [+1341 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "MintGenie Team",
                    "title": "RBI introduces new forex scheme to make transactions easier. Details here | Mint - Mint",
                    "description": "In order to enhance the ease of doing business, RBI has proposed to introduce a new category of money changers (under the scheme namely Forex Correspondents Scheme). These money changers may conduct money changing business through any agency model via Categor…",
                    "url": "https://www.livemint.com/money/personal-finance/rbi-introduces-new-forex-scheme-to-make-transactions-easier-details-here-11703674671121.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/forex-john-mcarthur-unsplash_1703674821044_1703674831688.jpg",
                    "publishedAt": "2023-12-27T11:44:30Z",
                    "content": "The Reserve Bank of India (RBI) has recently set the ball rolling for the licensing framework for authorised persons under the Foreign Exchange Management Act (FEMA). In other words, a new set of rul… [+2777 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Vaamanaa Sethi",
                    "title": "Akanksha Power and Infrastructure IPO opens for subscription; Check price band, issue size, GMP and other details | Mint - Mint",
                    "description": "Akanksha Power and Infrastructure IPO is a book-built issue of  ₹27.49 crores and is entirely a fresh issue of 49.98 lakh shares.",
                    "url": "https://www.livemint.com/market/ipo/akanksha-power-and-infrastructure-ipo-opens-for-subscription-check-price-band-issue-size-gmp-and-other-details-11703676801767.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/ipo_1703677268817_1703677268975.jpg",
                    "publishedAt": "2023-12-27T11:43:46Z",
                    "content": "Akanksha Power and Infrastructure initial public offering (IPO) opened for subscription today, December 27 and will close on December 29. The company has set a price band at 52 to 55 per share. Akank… [+3140 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Big setback for FirstCry ahead of IPO, firm reports 6x net loss: Report - Hindustan Times",
                    "description": "FirstCry, the company offering toys, apparel and babies accessories, saw its revenue from operations in FY22 surge by 135% from ₹2,401 crore to ₹5,633 crore",
                    "url": "https://www.hindustantimes.com/business/big-setback-for-firstcry-ahead-of-ipo-baby-accessories-firm-reports-6x-net-loss-report-101703670865056.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/Firstcry_1703675476307_1703675476565.jpeg",
                    "publishedAt": "2023-12-27T11:33:24Z",
                    "content": "FirstCry, the e-commerce firm likely to file for initial public offering (IPO) this week, has reported a six fold jump in its net loss for this fiscal at 486 crore. The net loss is 515 per cent more … [+1556 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBCTV18"
                    },
                    "author": "https://www.cnbctv18.com",
                    "title": "Akash Ambani's advice to IIT-Bombay students — 'Pursue your passion, embrace failure, and be honest to yoursel - CNBCTV18",
                    "description": "Akash Ambani discussed technology, innovation, and Reliance's commitment at IIT-Bombay Techfest. Highlights include JioBharat launch, AI focus, and fostering youth entrepreneurship. The event marks a decade-long collaboration with IIT-Bombay.",
                    "url": "https://www.cnbctv18.com/technology/akash-ambani-advice-iit-bombay-students-18657871.htm",
                    "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/12/whatsapp-image-2023-12-27-at-173601-1019x573.jpeg",
                    "publishedAt": "2023-12-27T11:30:43Z",
                    "content": "Note To ReadersDisclaimer: Network18, the parent company of CNBCTV18.com, is controlled by Independent Media Trust, of which Reliance Industries is the sole beneficiary."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Shivangini",
                    "title": "Gulfstream jets, e-wallets — India's young millionaires redefine luxury living: Hurun India survey | Mint - Mint",
                    "description": "The average Indian millionaire is just 32 years old, driving a surge in the luxury market with a growing appetite for e-wallets, private jets, and novel experiences.",
                    "url": "https://www.livemint.com/news/trends/gulfstream-jets-e-wallets-indias-young-millionaires-redefine-luxury-living-hurun-india-survey-11703669772730.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/luxury_1703671614597_1703671614878.jpg",
                    "publishedAt": "2023-12-27T10:32:27Z",
                    "content": "The average Indian millionaire is just 32 years old, according to the latest Hurun India Luxury Consumer Survey 2023. This young and vibrant group is driving a surge in the luxury market, with a grow… [+3412 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBCTV18"
                    },
                    "author": "Meghna Sen",
                    "title": "This PSU with 110% surge in 2023 will now invest ₹14,500 crore in Gujarat - CNBCTV18",
                    "description": "HUDCO will finance ₹14,500 crore of housing and urban infrastructure projects in Gujarat. On Wednesday, the stock settled 9.24% higher at ₹115.25 apiece.",
                    "url": "https://www.cnbctv18.com/market/hudco-share-price-this-psu-with-huge-surge-in-2023-will-now-invest-rs-14500-crore-in-gujarat-18656361.htm",
                    "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2022/11/HUDCO-shutterstock-1019x573.jpg",
                    "publishedAt": "2023-12-27T10:24:15Z",
                    "content": "Let's Connect with CNBCTV 18\r\n©TV18 Broadcast Limited. All rights reserved."
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "What's Next After US Apple Watch Import Ban? - Firstpost",
                    "description": null,
                    "url": "https://www.youtube.com/watch?v=fJ881OlhwAA",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T10:11:37Z",
                    "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "MintGenie Team",
                    "title": "UPI tap and pay expected to go live by Jan 31 next year: Report | Mint - Mint",
                    "description": "An NPCI circular said that UPI members can go live with the UPI Tap and Pay functionality by January 31, 2024",
                    "url": "https://www.livemint.com/money/personal-finance/upi-tap-and-pay-expected-to-go-live-by-jan-31-next-year-report-11703670473257.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/digital_payment_1703670524743_1703670539415.jpg",
                    "publishedAt": "2023-12-27T09:59:10Z",
                    "content": "The National Payments Corporation of India (NPCI) has started the process to deploy UPI Tap and Pay across digital payment providers soon after the apex body released details on the features roll out… [+3417 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Business Desk",
                    "title": "From 52-week low to life-time highs: India among top 10 best performing stock markets in the world in 202 - IndiaTimes",
                    "description": "India Business News: Indian stock markets rally in 2023: In early 2023, Indian stock markets started on a tough note, experiencing a notable decline and reaching a 52-week",
                    "url": "https://timesofindia.indiatimes.com/business/india-business/from-52-week-low-to-life-time-highs-india-among-top-10-best-performing-stock-markets-in-the-world-in-2023/articleshow/106319769.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106319666,width-1070,height-580,imgsize-193734,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T09:52:40Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "FXStreet"
                    },
                    "author": "Dhwani Mehta",
                    "title": "Gold price on December 27: Rates in main Indian cities - FXStreet",
                    "description": "Gold prices rose in India on Wednesday, according to data from India's Multi Commodity Exchange (MCX).",
                    "url": "https://www.fxstreet.com/news/india-gold-price-today-gold-rises-further-according-to-mcx-data-202312270927",
                    "urlToImage": "https://editorial.fxstreet.com/images/Markets/Commodities/Metals/Gold/stack-of-golden-bars-in-the-bank-vault-60756080_Large.jpg",
                    "publishedAt": "2023-12-27T09:27:53Z",
                    "content": "Gold prices rose in India on Wednesday, according to data from India's Multi Commodity Exchange (MCX).\r\nGold price stood at 62,966 Indian Rupees (INR) per 10 grams, up INR 527 compared with the INR 6… [+7150 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "Man Asks Rs 1 Lakh From Anand Mahindra To Buy Mahindra Shares, His Reply... - NDTV",
                    "description": "Anand Mahindra's witty reply caught the attention of many users on the internet.",
                    "url": "https://www.ndtv.com/offbeat/man-asks-rs-1-lakh-from-anand-mahindra-to-buy-mahindra-shares-his-reply-4750876",
                    "urlToImage": "https://c.ndtvimg.com/2023-01/9ff0cd48_anand-mahindra-shares-valuable-lesson-on-stress-management_625x300_02_January_23.jpg",
                    "publishedAt": "2023-12-27T09:01:36Z",
                    "content": "Mr Mahindra had an unusual encounter with a user on social media.\r\nIndustrialist Anand Mahindra, who is quite active on social media regularly posts about trending topics and engaging stories, for hi… [+2140 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol News",
                    "title": "IDFC, IDFC FHCL and IDFC First Bank receive no objection for amalgamation from RBI - Moneycontrol",
                    "description": "In July 2023 IDFC board of directors of IDFC FHCL, IDFC and IDFC FIRST Bank approved the proposal for amalgamation.",
                    "url": "https://www.moneycontrol.com/news/business/banks/idfc-idfc-fhcl-and-idfc-first-bank-receive-no-objection-for-amalgamation-from-rbi-11962151.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/08/IDFC-image1-e1669770252676.jpg",
                    "publishedAt": "2023-12-27T08:53:31Z",
                    "content": "IDFC Ltd on December 27 said the Reserve Bank of India (RBI) has given its no objection certificate (NOC) for the amalgamation of IDFC Limited, IDFC FHCL, and IDFC First Bank.\r\nIn July 2023 IDFC boar… [+1246 chars]"
                }
            ]
        }
        setArticles(dataBusiness.articles)
        setLoading(false)
        props.setProgress(100);
      } else if(props.category==='entertainment'){
        let dataEntertainment = {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "PTI",
                    "title": "Actor Sajid Khan: Actor Sajid Khan, known for 'Mother India' and 'Maya', passes away - Times of India - IndiaTimes",
                    "description": "Actor Sajid Khan, who played the younger version of Sunil Dutt's Birju in Mehboob Khan's \"Mother India\" and later rose to prominence with internationa",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/actor-sajid-khan-known-for-mother-india-and-maya-passes-away/articleshow/106327844.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106327960,width-1070,height-580,imgsize-30254,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T14:59:09Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Sriram Raghavan reveals Saif Ali Khan wanted Vijay's part in Merry Christmas - Hindustan Times",
                    "description": "Sriram Raghavan revealed that he wanted a fresh pair for Merry Christmas, and had to say no to Saif Ali Khan for Vijay Sethupathi's role opposite Katrina Kaif. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/sriram-raghavan-reveals-saif-ali-khan-wanted-vijay-sethupathi-part-in-merry-christmas-101703686335978.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/saif_1703686890858_1703686891174.jpg",
                    "publishedAt": "2023-12-27T14:39:25Z",
                    "content": "The unusual pairing of Katrina Kaif and Vijay Sethupathi in Merry Christmas has been the talk of the town. In a new interview with Pinkvilla, director Sriram Raghavan revealed that there was another … [+1754 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Kho Gaye Hum Kahan: X users find crossovers with Gehraiyaan, Dil Chahta Hai, K3G - Hindustan Times",
                    "description": "Arjun Varain Singh's directorial debut Kho Gaye Hum Kahan has resonated with users on X so much that some even dug up and located parallels to other films. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/kho-gaye-hum-kahan-x-users-find-crossovers-with-gehraiyaan-dil-chahta-hai-kabhi-khushi-kabhie-gham-101703681143919.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/kho_gaye_1703681372295_1703681390062.jpg",
                    "publishedAt": "2023-12-27T13:21:19Z",
                    "content": "Arjun Varain Singh's directorial debut Kho Gaye Hum Kahan, a coming-of-digital-age movie starring Ananya Panday, Siddhant Chaturvedi, and Adarsh Gourav, dropped on Netflix India on Tuesday. It's rece… [+2677 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "India Today Entertainment Desk",
                    "title": "Ankita Lokhande's mother reacts to viral video of Vicky Jain trying to slap her - India Today",
                    "description": "Ankita Lokhande's mother, Vandana, has reacted to the viral video of Vicky Jain trying to slap his wife. The couple often grab the limelight for their aggressive fights.",
                    "url": "https://www.indiatoday.in/television/reality-tv/story/ankita-lokhande-mother-vandana-reacts-to-viral-video-of-vicky-jain-slap-bigg-boss-17-2481161-2023-12-27",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/ankita-lokhandes-mother-reacts-to-viral-slap-video-featuring-vicky-jain-275150275-16x9_0.png?VersionId=h.xlxsoKYc2v1Z6r0vNSQK2RTHB6tIxF",
                    "publishedAt": "2023-12-27T13:07:01Z",
                    "content": "Ankita Lokhande and Vicky Jain are the newsmakers of ‘Bigg Boss 17’. From their lovey-dovey moments to their nasty fights, every action of the couple grabs an instant spotlight. Recently, a video of … [+1917 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Entertainment Desk",
                    "title": "Salaar box office collection day 6 early report: Prabhas film set to cross Rs 300 crore mark in India - The Indian Express",
                    "description": "Salaar box office collection day 6 early estimates: After surpassing Jawan to become the biggest opener of 2023, Prabhas-starrer Salaar has experienced a gradual decline in its collections.",
                    "url": "https://indianexpress.com/article/entertainment/bollywood/salaar-box-office-collection-day-6-early-report-prabhas-film-set-to-cross-rs-300-crore-mark-in-india-9085021/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/salaar-collection-day-6-1600.jpeg",
                    "publishedAt": "2023-12-27T13:03:23Z",
                    "content": "Prabhas is concluding the year 2023 on a high note with his latest film, Salaar: Part 1 Ceasefire, breaking many box office records. After surpassing Jawan to become the biggest opener of 2023, Salaa… [+1737 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "Onkar Kulkarni",
                    "title": "Exclusive: Orry on why he referred to Shruti Haasan’s partner Santanu Hazarika as her husband - IndiaTimes",
                    "description": "Orry’s AMA session led to a lot of confusion and the social media celeb clears the air",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/exclusive-orry-on-why-he-referred-to-shruti-haasans-partner-santanu-hazarika-as-her-husband/articleshow/106325353.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106325329,width-1070,height-580,imgsize-65136,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T12:41:52Z",
                    "content": "Timeless and iconic: Masterpieces of Hindi poetry by Indian authors"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "RGV files complaint against activist for offering ₹ 1 crore bounty on his head - Hindustan Times",
                    "description": "Filmmaker Ram Gopal Varma lodged a complaint against activist Kolikapudi Sreenivasa Rao with the Andhra police.",
                    "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/ram-gopal-varma-files-complaint-against-activist-for-offering-1-crore-bounty-on-his-head-101703675402758.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/Ram_Gopal_Varma_1703676924928_1703676947465.jpg",
                    "publishedAt": "2023-12-27T12:23:08Z",
                    "content": "Ram Gopal Varma lodged a complaint online on Tuesday and in person on Wednesday with the Andhra Pradesh police against activist Kolikapudi Sreenivasa Rao. He shared clips from a live television debat… [+2502 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Happy Birthday Salman Khan: From Aamir Khan to Varun Dhawan, Bollywood stars share all things sweet for B - IndiaTimes",
                    "description": "Salman Khan's 58th birthday celebration has become a social media phenomenon, captivating fans and industry members alike. The hashtag #HappyBirthdayS",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/happy-birthday-salman-khan-from-aamir-khan-to-varun-dhawan-bollywood-stars-share-all-things-sweet-for-bhaijaan/articleshow/106323981.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106324039,width-1070,height-580,imgsize-55380,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T12:02:51Z",
                    "content": "Bollywood wishes Salman Khan on his birthday; Karan Johar reveals how he 'got perfect Aman' for his debut movie 'KKHH'"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Vicky Kaushal and Katrina Kaif's Christmas pictures radiate the warmth of holidays - IndiaTimes",
                    "description": "Vicky Kaushal and Katrina Kaif delighted fans with a glimpse into their Christmas celebration. Celebrity fitness coach Yasmin Karachiwala shared pictu",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/vicky-kaushal-and-katrina-kaifs-christmas-pictures-radiate-the-warmth-of-holidays/articleshow/106322497.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106322760,width-1070,height-580,imgsize-88924,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T11:23:12Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "Tejashree Bhopatkar",
                    "title": "Pratik Gandhi: Bobby Deol has made the most stylized comeback this year - Exclusive! - IndiaTimes",
                    "description": "Pratik Gandhi discusses his excitement about hosting 'Crimes Aajkal season 2' for the first time. Known for experimenting with newer formats, he share",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/pratik-gandhi-bobby-deol-has-made-the-most-stylized-comeback-this-year-exclusive/articleshow/106321856.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106321867,width-1070,height-580,imgsize-32584,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T10:50:40Z",
                    "content": "Hansal Mehta reviews Shah Rukh Khan's 'Dunki': 'Not perfect but...'"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "A Fan Reminded Shah Rukh Khan Of Salman Khan's Birthday. His Epic Reply - NDTV Movies",
                    "description": "SRK and Salman Khan shared screen space twice this year",
                    "url": "https://www.ndtv.com/entertainment/a-fan-reminded-shah-rukh-khan-of-salman-khans-birthday-his-epic-reply-4751424",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/977u1ir8_srk-_625x300_27_December_23.jpg",
                    "publishedAt": "2023-12-27T10:49:09Z",
                    "content": "SRK with Salman Khan. (courtesy: beingsalmankhan)\r\nNew Delhi: Shah Rukh Khan, during his Ask Me Anything session with fans on X (earlier known as Twitter), was asked by a user if he knew that it is S… [+1739 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Tamannaah Bhatia and Vijay Varma jet off for a romantic New Year | Hindi Movie News - Times of India - IndiaTimes",
                    "description": "Tamannaah Bhatia and Vijay Varma, rumored to be a couple, capture attention with their adorable appearances. Recently spotted at the airport, heading",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/tamannaah-bhatia-and-vijay-varma-jet-off-for-a-romantic-new-year/articleshow/106321539.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106321517,width-1070,height-580,imgsize-50754,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T10:40:23Z",
                    "content": "Tamannah Bhatia wins hearts as she cuts cake with a fan at Mumbai airport"
                },
                {
                    "source": {
                        "id": null,
                        "name": "123telugu.com"
                    },
                    "author": null,
                    "title": "Hi Nanna actor joins the cast of Naga Chaitanya’s Thandel - 123telugu",
                    "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
                    "url": "https://www.123telugu.com/mnews/hi-nanna-actor-joins-the-cast-of-naga-chaitanyas-thandel.html",
                    "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
                    "publishedAt": "2023-12-27T10:30:00Z",
                    "content": "After the resounding success of Dhootha, actor Naga Chaitanya is geared up for his next cinematic venture, Thandel, directed by Chandoo Mondeti. Sai Pallavi is the female lead.\r\nFilming for the movie… [+620 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "India Today Trending Desk",
                    "title": "So, people couldn't recognise Dua Lipa in Rajasthan? Watch viral video and decide - India Today",
                    "description": "A video of Dua Lipa from Rajasthan has gone viral on social media and shows her casually strolling around in a marketplace.",
                    "url": "https://www.indiatoday.in/trending-news/story/dua-lipa-rajasthan-viral-video-unnoticed-watch-2481075-2023-12-27",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/dua-lipa-270504463-16x9_0.jpg?VersionId=RRK8R.QM5byD6Y3CXX8Q8XRrfn6ZC55d",
                    "publishedAt": "2023-12-27T10:11:20Z",
                    "content": "Pop sensation Dua Lipa, known for her global chart-topping hits such as ‘Levitating’, is in India for a holiday. She posted a set of pictures from her Rajasthan holiday during the weekend. A video fr… [+1206 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Entertainment Desk",
                    "title": "Karan Johar hints at reuniting with Salman Khan on his birthday: '25 years later, we will finally have a story to tell' - Hindustan Times",
                    "description": "Salman Khan is celebrating his 58th birthday. Karan Johar penned a special note, revealing how he found his perfect Aman in Salman for Kuch Kuch Hota Hai. | Bollywood",
                    "url": "https://www.hindustantimes.com/entertainment/bollywood/karan-johar-hints-at-reuniting-with-salman-khan-on-birthday-kuch-kuch-hota-hai-the-bull-101703665285297.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/karan_johar_salman_1703668358100_1703668359090.png",
                    "publishedAt": "2023-12-27T09:29:05Z",
                    "content": "Filmmaker Karan Johar took a walk down memory lane on Salman Khan's birthday. Salman turned 58 on Wednesday. On the occasion, Karan Johar penned a lengthy note on his debut film, Kuch Kuch Hota Hai, … [+2922 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "etimes.in",
                    "title": "Salaar: Prithviraj calls Prabhas 'dangerous', here's WHY - IndiaTimes",
                    "description": "Prithviraj praises Prabhas in a video, highlighting the latter's generous and caring nature. Prabhas offered Prithviraj his Lamborghini for a few days",
                    "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/salaar-prithviraj-calls-prabhas-dangerous-heres-why/articleshow/106317465.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106317386,width-1070,height-580,imgsize-23868,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T08:45:10Z",
                    "content": "8 secret tips to cook restaurant-like biryani at home"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "The Indian Express",
                    "title": "Animal producer hints at conspiracy to highlight Triptii Dimri over Rashmika Mandanna: ‘Wife is wife, girlfriend is girlfriend’ - The Indian Express",
                    "description": null,
                    "url": "https://indianexpress.com/article/entertainment/bollywood/animal-triptii-dimri-overshadowing-rashmika-mandanna-pranay-reddy-vanga-interview-9084567/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T08:16:46Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "ANIMAL: Scene Breakdown with Sandeep Reddy Vanga | Ranbir Kapoor| T-Series| Mashable Todd-Fodd EP40 - Mashable India",
                    "description": "Love it, hate it, criticize it - the Ranbir Kapoor starrer Animal, directed by Sandeep Reddy Vanga is on everybody's minds! The scenes from the movie has mad...",
                    "url": "https://www.youtube.com/watch?v=xqxtp0Fb0qE",
                    "urlToImage": "https://i.ytimg.com/vi/xqxtp0Fb0qE/maxresdefault.jpg",
                    "publishedAt": "2023-12-27T08:13:22Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "123telugu.com"
                    },
                    "author": null,
                    "title": "Devil’s initial director Naveen Medaram’s Instagram post goes viral - 123telugu",
                    "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
                    "url": "https://www.123telugu.com/mnews/devils-initial-director-naveen-medarams-instagram-post-goes-viral.html",
                    "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
                    "publishedAt": "2023-12-27T08:05:00Z",
                    "content": "Nandamuri Kalyan Ram is set to portray a British spy in the upcoming pan-Indian period spy thriller Devil, scheduled to hit screens in multiple languages on December 29, 2023. Samyuktha plays the fem… [+1509 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "Janani K",
                    "title": "Jr NTR's 'Devara' teaser to be out soon? Composer Anirudh Ravichander drops hint - India Today",
                    "description": "Reports suggest that the teaser of Jr NTR's upcoming film, 'Devara', will be unveiled soon. Composer Anirudh Ravichander dropped a hint about the same on X.",
                    "url": "https://www.indiatoday.in/movies/regional-cinema/story/jr-ntrs-devara-teaser-to-be-out-soon-composer-anirudh-ravichander-drops-hint-2481013-2023-12-27",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/jr-ntr-devara-274018977-16x9_0.jpg?VersionId=uxB7DXIJroGyQVCEfw_xbbiKxTKd0TNw",
                    "publishedAt": "2023-12-27T08:01:12Z",
                    "content": "Jr NTR and director Koratala Siva's 'Devara' is one of the most anticipated films of 2024. Recently, rumours about the makers planning to release the teaser are going viral. Adding fuel to the fire i… [+1312 chars]"
                }
            ]
        }
        setArticles(dataEntertainment.articles)
        setLoading(false)
        props.setProgress(100);
      } else if(props.category==='health'){
        let dataHealth = {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "WION"
                    },
                    "author": "Prisha",
                    "title": "8 Vegetarian Foods Which Contain More Calcium Than Milk - WION",
                    "description": "8 Vegetarian Foods Which Contain More Calcium Than Milk",
                    "url": "https://www.wionews.com/web-stories/trending/8-vegetarian-foods-which-contain-more-calcium-than-milk-1703691011133",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T16:21:25Z",
                    "content": "Chia seeds are filled with nutrients, including calcium. One can have chia seeds with oatmeal, smoothies or yoghurt."
                },
                {
                    "source": {
                        "id": null,
                        "name": "[Removed]"
                    },
                    "author": null,
                    "title": "[Removed]",
                    "description": "[Removed]",
                    "url": "https://removed.com",
                    "urlToImage": null,
                    "publishedAt": "1970-01-01T00:00:00Z",
                    "content": "[Removed]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Investing.com"
                    },
                    "author": "IANS",
                    "title": "No real need for booster vaccination, say experts as JN.1 spreads in India - Investing.com India",
                    "description": "The Financial News section features stock market news in addition to stories about bonds, forex, commodities and economic releases.",
                    "url": "https://in.investing.com/news/no-real-need-for-booster-vaccination-say-experts-as-jn1-spreads-in-india-3951855",
                    "urlToImage": "https://i-invdn-com.investing.com/news/https://i-invdn-com.investing.com/akapi-images/800x450/f187a581f8c12e0c06939cf5c182b6c5_w_800_h_450.jpg",
                    "publishedAt": "2023-12-27T15:20:01Z",
                    "content": "New Delhi, Dec 27 (IANS) There is no real need for booster vaccination, said experts even as JN.1, from the lineage of Omicron variant of Covid, is rapidly spreading in the country.First detected in … [+3459 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "The Indian Express",
                    "title": "UPSC Essentials | Daily subject-wise quiz — Environment, Geography, Science and Technology (Week 38) - The Indian Express",
                    "description": null,
                    "url": "https://indianexpress.com/article/upsc-current-affairs/upsc-essentials/upsc-essentials-daily-subject-wise-quiz-environment-geography-science-and-technology-week-38-9085329/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T15:18:11Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "Zarafshan Shiraz",
                    "title": "Want to age gracefully? Take charge of your gut microbiota with these tips - Hindustan Times",
                    "description": "Exert control over your gut microbiota to support healthy ageing. Here are some actionable steps to consider | Health",
                    "url": "https://www.hindustantimes.com/lifestyle/health/want-to-age-gracefully-take-charge-of-your-gut-microbiota-with-these-tips-to-support-healthy-ageing-101703687715454.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/Collage_Maker-10-Apr-2023-01-39-PM-343_1681113742857_1703688438239.jpg",
                    "publishedAt": "2023-12-27T14:56:24Z",
                    "content": "Ageing is a progressive loss of homeostasis, impaired function, cognitive decline and vulnerability to death due to chronic, infectious, metabolic and neoplastic diseases hence, ageing gracefully is … [+5146 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Financial Express"
                    },
                    "author": "The Financial Express",
                    "title": "No, red wine is not good for your heart! Here’s why it’s as bad as any other alcohol - The Financial Express",
                    "description": null,
                    "url": "https://www.financialexpress.com/healthcare/news-healthcare/no-red-wine-is-not-good-for-your-heart-heres-why-its-as-bad-as-any-other-alcohol-bkg/3349085/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T14:23:15Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Mid-day"
                    },
                    "author": null,
                    "title": "Health, lifestyle factors crucial to reduce risk of young-onset dementia: Study - mid-day.com",
                    "description": "Lifestyle factors such as alcohol use disorder and social isolation, and health issues including vitamin D deficiency, depression, stroke, hearing impairment an",
                    "url": "https://www.mid-day.com/lifestyle/health-and-fitness/article/health-lifestyle-factors-crucial-to-reduce-risk-of-young-onset-dementia-study-23326925",
                    "urlToImage": "https://images.mid-day.com/images/images/2023/dec/Dementiainyoungmidday_d.jpg",
                    "publishedAt": "2023-12-27T13:10:00Z",
                    "content": "Lifestyle factors such as alcohol use disorder and social isolation, and health issues including vitamin D deficiency, depression, stroke, hearing impairment and heart disease significantly elevate r… [+2577 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Saima Khan",
                    "title": "8 short and long-term effects of alcohol on body - Sportskeeda",
                    "description": "Although various people have various kinds of effects of alcohol on body, it is generally swiftly absorbed through your digestive system into your blood.",
                    "url": "https://www.sportskeeda.com/health-and-fitness/8-short-long-term-effects-alcohol-body",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/233b2-17036786540834-1920.jpg",
                    "publishedAt": "2023-12-27T13:10:00Z",
                    "content": "Although various people have various kinds of effects of alcohol on body, it is generally swiftly absorbed through your digestive system into your blood. In less than an hour, alcohol in the blood hi… [+4705 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Ianslive.in"
                    },
                    "author": null,
                    "title": "LIVE-LIGHT EXERCISE MAY HELP REVERSE CHILDHOOD OBESITY - IANS",
                    "description": null,
                    "url": "https://ianslive.in/light-exercise-may-help-reverse-childhood-obesity--20231227173006",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T13:02:20Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "ABC Juice: 5 Health Benefits Of The Apple, Beetroot And Carrot Combination - NDTV",
                    "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
                    "url": "https://www.ndtv.com",
                    "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
                    "publishedAt": "2023-12-27T12:30:31Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Unmc.edu"
                    },
                    "author": null,
                    "title": "Every COVID Infection Increases Your Risk of Long COVID, Study Warns - University of Nebraska Medical Center",
                    "description": "Science Alert Vaccines ensure bouts of COVID are far less deadly than they were at the pandemic’s start, yet multiple studies now suggest even seemingly mild cases of the coronavirus have a c…",
                    "url": "https://www.unmc.edu/healthsecurity/transmission/2023/12/27/every-covid-infection-increases-your-risk-of-long-covid-study-warns/",
                    "urlToImage": "https://s0.wp.com/i/blank.jpg",
                    "publishedAt": "2023-12-27T12:25:28Z",
                    "content": "Science Alert Vaccines ensure bouts of COVID are far less deadly than they were at the pandemic‘s start, yet multiple studies now suggest even seemingly mild cases of the coronavirus have a cost. Wit… [+2251 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": "NDTV Food",
                    "title": "5 Anti-Ageing Foods For Men To Stay Healthy And Youthful - NDTV Food",
                    "description": "Increasing age affects overall health both for men and women. While we discuss much about women's wellness, it is important for men as well, especially post 40. Once they turn 40, the metabolic rate decreases, increasing the possibility of various diseases. A…",
                    "url": "https://food.ndtv.com/photos/5-anti-ageing-foods-for-men-to-stay-healthy-and-youthful-106589",
                    "urlToImage": "https://drop.ndtv.com/albums/COOKS/5-anti-ageing-f_638392956585391560/638392956585391560_640x480.jpeg?downsize=120:90",
                    "publishedAt": "2023-12-27T12:18:54Z",
                    "content": "menu\r\narrow-down\r\nreddit\r\nsnapchat\r\ntwitter\r\nfacebook\r\ncomments\r\nemail\r\nprinter\r\nsearch\r\nbell\r\ntop-nav\r\nIncreasing age affects overall health both for men and women. While we discuss much about women… [+526 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Salon"
                    },
                    "author": "Matthew Rozsa",
                    "title": "Brain damage caused by COVID-19 may not show up on routine tests, study finds - Salon",
                    "description": "COVID can severely injure the brain, but these changes can go undetected — and last for months",
                    "url": "https://www.salon.com/2023/12/27/brain-damage-caused-by-19-may-not-show-up-on-routine-tests-study-finds/",
                    "urlToImage": "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2023/12/doctor_looking_at_mri_scans_of_covid_patient_1230058373.jpg",
                    "publishedAt": "2023-12-27T12:15:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Is COVID-19 Becoming A Seasonal Influenza? Takeaways From The Propagation Of JN.1 - DNAIndiaNews",
                    "description": "Is COVID-19 Becoming A Seasonal Influenza? Takeaways from the propagation of JN.1“Scientific studies say that colder temperatures and drier air create an env...",
                    "url": "https://www.youtube.com/watch?v=ca__Q9MTIxE",
                    "urlToImage": "https://i.ytimg.com/vi/ca__Q9MTIxE/maxresdefault.jpg",
                    "publishedAt": "2023-12-27T12:10:44Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Moneycontrol",
                    "title": "What to eat every morning to lead a healthy life - Moneycontrol",
                    "description": "What to eat in the morning on empty stomach: Put the spotlight on these 10 fruits, seeds and drinks to stay the course on your weight loss journey.",
                    "url": "https://www.moneycontrol.com/web-stories/what-to-eat-on-empty-stomach-how-to-control-blood-sugar-level-how-to-lose-weight-weight-loss-diet-health-benefits-of-almonds-flaxseed-chia-seeds-fenugreek-seeds-green-tea-greek-yoghurt-1421227.html",
                    "urlToImage": "https://images.news18.com/webstories/2023/12/Early-morning-routine.jpg",
                    "publishedAt": "2023-12-27T12:08:17Z",
                    "content": "Flaxseeds: Loaded with soluble fibre and lignans, these keep your blood sugar levels in check, promote gut health, and support a feeling of fullness. All these are critical for losing weight"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Moneycontrol"
                    },
                    "author": "Sushmita Srivastav",
                    "title": "Happy New Year 2024: 5 different types of diet plans to pick from in 2024 - Moneycontrol",
                    "description": "Happy New Year 2024: Whether aiming for weight management, better health outcomes, or a shift towards a more sustainable lifestyle, these diet plans pave the way for individuals to embark on a journey towards improved well-being.",
                    "url": "https://www.moneycontrol.com/news/health-and-fitness/happy-new-year-2024-5-different-types-of-diet-plans-to-pick-from-in-2024-benefits-of-mediterranean-diet-benefits-of-intermittent-fasting-benefits-of-plant-based-diet-11963261.html",
                    "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/05/Benefits-of-Mediterranean-diet-2-770x433.jpg",
                    "publishedAt": "2023-12-27T11:59:34Z",
                    "content": "Be it taking care of your heart health, maintaining your weight, or simply meaning to find a balanced approach towards the food you eat dailypicking the right diet plan is the key to achieving your h… [+3435 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "DNA India"
                    },
                    "author": "Khushi Patel",
                    "title": "Signs of silent heart attack that should not be ignored - DNA India",
                    "description": "signs of heart attack",
                    "url": "https://www.dnaindia.com/web-stories/health/signs-of-silent-heart-attack-that-should-not-be-ignored-chest-pain-breathlessness-vomiting-cold-sweat--1703676701151",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T11:57:36Z",
                    "content": "In addition to the upper body, additional locations that may experience pain or discomfort include the back, neck, jaw, stomach, and arms, particularly the left arm"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Firstpost"
                    },
                    "author": "FP Explainers",
                    "title": "After COVID, is zombie deer disease the new pandemic humans should be wary about? - Firstpost",
                    "description": "Zombie deer disease, also known as the infectious chronic wasting disease CWD, affects deer, elk, caribou, reindeer, and moose. The condition is a slow-moving disaster, according to experts, and governments should get ready in case it spreads to humans",
                    "url": "https://www.firstpost.com/explainers/after-covid-is-zombie-deer-disease-the-new-pandemic-humans-should-be-wary-about-13550152.html",
                    "urlToImage": "https://images.firstpost.com/wp-content/uploads/2023/12/free-photo-of-deer-in-close-up-photography.jpg",
                    "publishedAt": "2023-12-27T11:46:05Z",
                    "content": "You must be familiar with zombie illness in humans but not in animals, right?\r\nBut in a recent development, hundreds of animals in the US are being affected by a “zombie deer disease.”\r\nThe condition… [+3231 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Darkdaily.com"
                    },
                    "author": "Jillia Schlingman",
                    "title": "University of Oslo Research Study Suggests Most Cancer Screenings Do Not Prolong Lives - DARKDaily.com - Laboratory News",
                    "description": "University of Oslo research study suggests most cancer screenings do not prolong lives.",
                    "url": "https://www.darkdaily.com/?p=46259",
                    "urlToImage": "https://www.darkdaily.com/wp-content/uploads/norwegi-1.jpg",
                    "publishedAt": "2023-12-27T11:27:59Z",
                    "content": "Norwegian researchers reviewed large clinical trials of six common cancer screenings, including clinical laboratory tests, but some experts question the findings\r\nCancer screenings are a critical too… [+8101 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "DNA India"
                    },
                    "author": "Kajari Goswami",
                    "title": "7 habits that make you age faster - DNA India",
                    "description": "7 habits that make you age faster",
                    "url": "https://www.dnaindia.com/web-stories/lifestyle/7-habits-that-make-you-age-faster-1703675783383",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T11:26:34Z",
                    "content": "Stress: Stress is a vital reason for early ageing. It can affect our metabolism, weight, mental health and other factors."
                }
            ]
        }
        setArticles(dataHealth.articles)
        setLoading(false)
        props.setProgress(100);
      } else if(props.category==='science'){
        let dataScience = {
            "status": "ok",
            "totalResults": 69,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "Citylife.capetown"
                    },
                    "author": "Gabriel Botha",
                    "title": "New Insights into Zebrafish Development Illuminate Human Health - CityLife",
                    "description": "New Insights into Zebrafish Development Illuminate Human Health - CityLife",
                    "url": "https://citylife.capetown/webstories/new-insights-into-zebrafish-development-illuminate-human-health/",
                    "urlToImage": "https://citylife.capetown/wp-content/uploads/2023/05/mfrack_realistic_photo_of_IT_technologies_of_XXI_century_high_r_cb949f5f-6b88-4c8c-a140-3e687f1d9ad7.jpeg",
                    "publishedAt": "2023-12-27T15:07:03Z",
                    "content": "Researchers at the National Institutes of Health have made a groundbreaking discovery in understanding how baby zebrafish grow, shedding light on the development of human health. Through an extensive… [+4753 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Dtnext.in"
                    },
                    "author": "ANI",
                    "title": "Scientists unveil comprehensive cell map of mammalian brain - DTNEXT",
                    "description": "This atlas serves as a map of the mouse brain, describing the kind, location, and chemical information of over 32 million cells as well as information on cell connectivity.",
                    "url": "https://www.dtnext.in/lifestyle/wellbeing/scientists-unveil-comprehensive-cell-map-of-mammalian-brain-757109",
                    "urlToImage": "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/12/27/789599-untitleddesign35.jpg",
                    "publishedAt": "2023-12-27T14:30:58Z",
                    "content": "WASHINGTON DC: An international team of researchers has constructed a full-cell atlas of an entire mammalian brain for the first time. \r\nThis atlas serves as a map of the mouse brain, describing the … [+3367 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "msnNOW"
                    },
                    "author": null,
                    "title": "A bizarre galaxy NASA spotted at the edge of the universe could upend what we know about supermassive black holes - MSN",
                    "description": null,
                    "url": "https://www.msn.com/en-in/news/techandscience/a-bizarre-galaxy-nasa-spotted-at-the-edge-of-the-universe-could-upend-what-we-know-about-supermassive-black-holes/ar-AA1m6ej8",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T14:27:06Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Down To Earth Magazine"
                    },
                    "author": null,
                    "title": "What are the space missions slated for launch in 2024? - Down To Earth Magazine",
                    "description": "2024 will be another important year for space exploration, with several new missions in the pipeline",
                    "url": "https://www.downtoearth.org.in/video/science-and-technology/what-are-the-space-missions-slated-for-launch-in-2024--93592",
                    "urlToImage": "https://i.ytimg.com/vi/qoxhvbmpfYw/hqdefault.jpg",
                    "publishedAt": "2023-12-27T14:18:37Z",
                    "content": "2024 will be another important year for space exploration, with several new missions in the pipeline2023 was an important year for space missions including India’s Chandrayaan-3 mission which set out… [+2755 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Financial Express"
                    },
                    "author": "The Financial Express",
                    "title": "Calling all space enthusiasts! Send your name to Jupiter’s moon Europa by Dec 31st – Check direct link, steps for submission - The Financial Express",
                    "description": null,
                    "url": "https://www.financialexpress.com/life/science-calling-all-space-enthusiasts-send-your-name-to-jupiters-moon-europa-by-dec-31st-check-direct-link-steps-for-submission-bkg-3349079/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T14:01:36Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Financial Express"
                    },
                    "author": "The Financial Express",
                    "title": "What exactly is solar storm? As new geomagnetic disturbance set to strike Earth today, know its key features - The Financial Express",
                    "description": null,
                    "url": "https://www.financialexpress.com/life/science-what-exactly-is-solar-storm-as-new-geomagnetic-disturbance-set-to-strike-earth-today-know-its-key-features-bkg-3349066/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T13:46:57Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Super-propulsion: How sharpshooting insects flick their pee - nature video",
                    "description": "Sharpshooters are tiny insects capable of extraordinary feats. They feed on xylem fluid which is about 95% water and as a result they produce a lot of urine ...",
                    "url": "https://www.youtube.com/watch?v=y9xsewTQIHc",
                    "urlToImage": "https://i.ytimg.com/vi/y9xsewTQIHc/maxresdefault.jpg",
                    "publishedAt": "2023-12-27T13:02:21Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "NASA launches new mission to intercept 'God of Chaos' asteroid which might collide with Earth; All about it - Times of India - IndiaTimes",
                    "description": "Trending News: The asteroid ‘God of Chaos’ was first discovered in 2004 and is expected to pass within 20,000 miles",
                    "url": "https://timesofindia.indiatimes.com/etimes/trending/nasa-launches-new-mission-to-intercept-god-of-chaos-asteroid-which-might-collide-with-earth-all-about-it/articleshow/106324497.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106324513,width-1070,height-580,imgsize-1616392,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T12:22:05Z",
                    "content": "Alia Bhatt had a Q&amp;A session on Instagram where she shared details about her workout routine. She works out six days a week, combining strength training, yoga/pilates, and cardio. She also reveal… [+342 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "Buzz Staff",
                    "title": "A Look At Christmas Celebrations At The International Space Station - News18",
                    "description": "Jasmin Moghbeli has shared a bunch of jolly good pictures on Instagram.",
                    "url": "https://www.news18.com/viral/a-look-at-christmas-celebrations-at-the-international-space-station-8719205.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/untitled-design-2023-12-27t160105.741-2023-12-f6002fdaf7cfb049bfc68a35c5f33f7d-16x9.png?impolicy=website&width=1200&height=675",
                    "publishedAt": "2023-12-27T12:18:00Z",
                    "content": "The crew at the International Space Station (ISS) shared snippets of their Christmas celebration from space. Currently, the team of Expedition 70, a long-duration space mission consisting of astronau… [+3034 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": "Reuters",
                    "title": "Humanoid robots in space: the next frontier - Reuters",
                    "description": null,
                    "url": "https://www.reuters.com/science/humanoid-robots-space-next-frontier-2023-12-27/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T12:08:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tech Explorist"
                    },
                    "author": "Amit Malewar",
                    "title": "Ice trails on Mars: MRO captures ice-flow patterns - Tech Explorist",
                    "description": "Ice flows on Mars.",
                    "url": "https://www.techexplorist.com/ice-trails-mars-mro-captures-ice-flow-patterns/78996/",
                    "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/12/marsice.jpg",
                    "publishedAt": "2023-12-27T11:54:12Z",
                    "content": "On August 18, 2023, the Mars Reconnaissance Orbiter (MRO) took pictures of lines on Mars made by ice moving over time. Usually, ice is found at Mars’s polar caps, but these lines are in many non-pola… [+734 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Chandrayaan-3 to Virgin Galactic: 2023's scientific breakthroughs - Business Standard",
                    "description": "As 2023 comes to a close, watch the video to reflect on a year marked by remarkable scientific breakthroughs. #chandrayaan3 #virgingalactic #scientificbreakt...",
                    "url": "https://www.youtube.com/watch?v=xpgkzU4ufXM",
                    "urlToImage": "https://i.ytimg.com/vi/xpgkzU4ufXM/maxresdefault.jpg",
                    "publishedAt": "2023-12-27T11:30:32Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Tech Explorist"
                    },
                    "author": "Amit Malewar",
                    "title": "A new method to search for deviations from the Standard Model of physics - Tech Explorist",
                    "description": "Entanglement to the rescue.",
                    "url": "https://www.techexplorist.com/new-method-search-deviations-standard-model-physics/78991/",
                    "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2023/12/entangled-molecules.jpg",
                    "publishedAt": "2023-12-27T11:16:23Z",
                    "content": "Physicists at Caltech search for new clues about the universe by studying behaviors in atoms and molecules that go against the known Standard Model of particle physics. Any differences from this mode… [+2989 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bnnbreaking.com"
                    },
                    "author": "Nitish Verma",
                    "title": "TOI-1452 b: A Newly Discovered Super-Earth in the Habitable Zone - BNN Breaking",
                    "description": "Astronomers discover a new exoplanet, TOI-1452 b, that lies within the habitable zone of its star and could potentially support liquid water and life.",
                    "url": "https://bnnbreaking.com/tech/science-tech/toi-1452-b-a-newly-discovered-super-earth-in-the-habitable-zone/",
                    "urlToImage": "https://media.bnn.network/content/uploads/2023/12/exoplanet-toi-1452-b-20231227110417.jpg",
                    "publishedAt": "2023-12-27T11:04:00Z",
                    "content": "Penetrating the vast mysteries of the cosmos, astronomers have detected a new exoplanet, christened TOI-1452 b, situated approximately 100 light-years from our blue planet. This significant discovery… [+1675 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Financial Express"
                    },
                    "author": "The Financial Express",
                    "title": "This snail species survived mass extinction! 72-million-year-old fossil discovered in Romania is an undeniable proof - The Financial Express",
                    "description": null,
                    "url": "https://www.financialexpress.com/life/science/this-snail-species-survived-mass-extinction-72-million-year-old-fossil-discovered-in-romania-is-an-undeniable-proof-bkg/3348848/",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T10:58:48Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cgtn.com"
                    },
                    "author": "CGTN",
                    "title": "CMG releases top 10 international news stories of 2023 - CGTN",
                    "description": "China Media Group on Wednesday released the top 10 international news stories of 2023, at a press conference at the Media Center in Beijing.",
                    "url": "https://news.cgtn.com/news/2023-12-27/CMG-releases-top-10-international-news-stories-of-2023-1pSpDayRb1u/p.html",
                    "urlToImage": "https://video.cgtn.com/news/2023-12-27/CMG-releases-top-10-international-news-stories-of-2023-1pSpDayRb1u/video/744c0eb6ba8549798df5d5b3bf7b27b9/744c0eb6ba8549798df5d5b3bf7b27b9-1280.jpg",
                    "publishedAt": "2023-12-27T10:09:25Z",
                    "content": "China Media Group on Wednesday unveiled its picks for the top 10 international news stories of 2023, at a press conference at the Media Center in Beijing.\r\n1. Chinese leadership's diplomacy injects s… [+12483 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Nanowerk"
                    },
                    "author": null,
                    "title": "The big potential of MOFs in tackling fundamental problems - Nanowerk",
                    "description": "MOFs are being enhanced for global benefits, including water capture, energy efficiency, cancer treatment and CO2 trapping.",
                    "url": "https://www.nanowerk.com/nanotechnology-news3/newsid=64318.php",
                    "urlToImage": "https://www.nanowerk.com/nanotechnology-news3/id64318.jpg",
                    "publishedAt": "2023-12-27T09:40:03Z",
                    "content": "Nanowerk Newsletter\r\nGet our daily Nanotechnology News to your inbox!"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "New Hubble Telescope Image Shows Mysterious Spokes On Saturn's Rings - NDTV",
                    "description": "Scientists have been aware of the mysterious spokes on Saturn's rings for a long time",
                    "url": "https://www.ndtv.com/science/new-hubble-telescope-image-shows-mysterious-spokes-on-saturns-rings-4751035",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/sjenq6s_saturn-mysterious-spokes_625x300_27_December_23.jpeg?ver-20231203.06",
                    "publishedAt": "2023-12-27T09:33:10Z",
                    "content": "Saturn's autumnal equinox is expected to occur on May 6, 2025\r\nThe Hubble Space Telescope has captured a recent image revealing the enigmatic and ethereal shadows on Saturn's rings, marking the lates… [+2297 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "THE WEEK"
                    },
                    "author": "Web Desk",
                    "title": "AI System recreated Nobel Prize-winning chemical reactions in lab - The Week",
                    "description": "AI)-driven system was autonomously able to learn about some Nobel Prize-winning chemical reactions and design a successful laboratory procedure",
                    "url": "https://www.theweek.in/news/sci-tech/2023/12/27/ai-system-recreated-nobel-prize-winning-chemical-reactions-in-la.html",
                    "urlToImage": "https://www.theweek.in/content/dam/week/news/2023/images/2023/7/10/Science-technology-lab-Research-and-Development-laboratory-drug-discovery-shut.jpg",
                    "publishedAt": "2023-12-27T09:22:00Z",
                    "content": "An artificial intelligence (AI) system has independently mastered and successfully recreated Nobel Prize-winning chemical reactions in the laboratory. The remarkable achievement, detailed in a study … [+3234 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "The Indian Express"
                    },
                    "author": "Science Desk",
                    "title": "2024 is going to be busy for NASA’s Kennedy Space Center in Florida - The Indian Express",
                    "description": "Even if Artemis 2 does not launch in 2024, the year is going to be quite busy for NASA's Kennedy Space Center in Florida.",
                    "url": "https://indianexpress.com/article/technology/science/2024-is-going-to-be-busy-for-nasas-kennedy-space-center-in-florida-9084744/",
                    "urlToImage": "https://images.indianexpress.com/2023/12/Kennedy-space-center-20231227.jpg",
                    "publishedAt": "2023-12-27T09:15:41Z",
                    "content": "2023 was a big year for space exploration and the momentum of this busy year will carry forward into the next for NASAs Kennedy Space Center in Florida. The space agencys important field center will … [+1535 chars]"
                }
            ]
        }
        setArticles(dataScience.articles)
        setLoading(false)
        props.setProgress(100);
      } else if(props.category==='sports'){
        let dataSports = {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "India.com"
                    },
                    "author": "Zee News Desk",
                    "title": "Highlights | IND VS SA Day 2, 1st Test Cricket Score and Updates: Dean Elgar Shines As South Africa Take 11 Runs Lead With 5 Wickets In Hand - Zee News",
                    "description": "Highlights | IND VS SA Day 2, 1st Test Cricket Score and Updates: Dean Elgar Shines As South Africa",
                    "url": "https://zeenews.india.com/cricket/live-updates/highlights-cricket-score-ind-vs-sa-1st-test-day-2-match-cricket-match-today-india-vs-south-africa-cricket-highlights-score-updates-supersport-park-centurion-rohit-sharma-virat-kohli-temba-bavuma-2702663",
                    "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/12/27/1341833-ind-sa-day-2.jpg",
                    "publishedAt": "2023-12-27T15:38:34Z",
                    "content": "On Day 2 of the 1st Test between South Africa and India, the match at SuperSport Park, Centurion, saw South Africa finishing the day with a lead of 11 runs. In their first innings, South Africa poste… [+647 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Brisbane Heat v Sydney Thunder | BBL|13 - cricket.com.au",
                    "description": null,
                    "url": "https://www.youtube.com/watch?v=ALvc2HcSZdA",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T15:30:03Z",
                    "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "Watch: Virat Kohli does Stuart Broad, his 'bails flip' act works magic for Jasprit Bumrah - Times of India",
                    "description": "Star India cricketer Virat Kohli recreated the famous 'bail switch' trick on the second day of the first Test match against South Africa in Centurion",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/watch-virat-kohli-does-stuart-broad-his-bails-flip-act-works-magic-for-jasprit-bumrah/articleshow/106328221.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106328218,width-1070,height-580,imgsize-33718,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T15:25:46Z",
                    "content": "Virat Kohli wins player of the tournament at ICC Men's Cricket World Cup 2023"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Crictracker.com"
                    },
                    "author": "CricTracker",
                    "title": "WAR vs GUA Live Score, Match 1 | Warriors vs Guardians Score & Updates of Match 1 - CricTracker",
                    "description": "WAR vs GUA Match 1, Live Score: Get all the latest WAR vs GUA Live Score of Match 1 along with ball by ball commentary & updates on CricTracker.",
                    "url": "https://www.crictracker.com/live-scores/war-vs-gua-match-1-t10-barbados-t10-27-dec-2023/",
                    "urlToImage": "https://www.crictracker.com/images/CricTracker-Facebook-Preview.jpg",
                    "publishedAt": "2023-12-27T15:09:22Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Livemint",
                    "title": "Vinesh Phogat returning Khel Ratna: ‘These tactics’ must be stopped, says Haryana minister Anil Vij | Mint - Mint",
                    "description": "Vinesh Phogat’s decision to return her awards comes days after Olympic medallist Bajrang Punia and Deafylmpics champion Virender Singh Yadav returned their Padma Shri awards",
                    "url": "https://www.livemint.com/news/india/vinesh-phogat-returning-khel-ratna-these-tactics-must-be-stopped-says-haryana-minister-anil-vij-11703677693834.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/vineshphogat_1703678025133_1703678025337.jpg",
                    "publishedAt": "2023-12-27T13:39:50Z",
                    "content": "On wrestler Vinesh Phogat returning her Khel Ratna Award to protest against the Wrestling Federation of India (WFI), Haryana Home Minister Anil Vij on Wednesday said that these tactics of returning a… [+2500 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Chessbase.com"
                    },
                    "author": "ChessBase",
                    "title": "World Rapid Championship - Live! - ChessBase",
                    "description": "The World Rapid and Blitz Championships are taking place on December 26-30 in Samarkand, Uzbekistan. Almost the entire world elite will be competing, with Magnus Carlsen the favourite in the open tournaments and world champion Ju Wenjun participating in both …",
                    "url": "https://en.chessbase.com/post/world-rapid-blitz-2023-live",
                    "urlToImage": "https://en.chessbase.com/thumb/115465_l200",
                    "publishedAt": "2023-12-27T13:29:16Z",
                    "content": "<ul><li>Still no ChessBase Account?learn more &gt;8 million games online! Updated weekly, our definitive database has all the latest games. \r\nWith Live Book and Lets Check!</li><li>Still no ChessBase… [+2547 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Sports Desk",
                    "title": "Shastri livid with Rohit's poor captaincy on Day 2 as SA punish India bowlers - Hindustan Times",
                    "description": "Former India cricketer Ravi Shastri was not at all happy with Rohit Sharma's captaincy after lunch on Day 2 of the first Test vs South Africa. | Cricket",
                    "url": "https://www.hindustantimes.com/cricket/shastri-livid-at-rohit-sharmas-poor-captaincy-as-dean-elgar-punishes-india-bowlers-after-lunch-on-day-2-of-1st-test-101703680949095.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/CRICKET-TEST-ZAF-IND--14_1703681025676_1703681070594.JPG",
                    "publishedAt": "2023-12-27T12:53:02Z",
                    "content": "Former India head coach Ravi Shastri was livid with Rohit Sharma's captaincy after lunch on Day 2 of the Boxing Day Test against South Africa at the Supersport Park in Centurion. The Test match hung … [+3652 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "[Removed]"
                    },
                    "author": null,
                    "title": "[Removed]",
                    "description": "[Removed]",
                    "url": "https://removed.com",
                    "urlToImage": null,
                    "publishedAt": "1970-01-01T00:00:00Z",
                    "content": "[Removed]"
                },
                {
                    "source": {
                        "id": "espn-cric-info",
                        "name": "ESPN Cric Info"
                    },
                    "author": "Danyal Rasool",
                    "title": "Shafique rues Pakistan's batting collapse: 'As a batter you have to take your chances' - ESPNcricinfo",
                    "description": "\"Someone like Cummins will not give you loose deliveries so you have to create them. He was planning something for me because I was playing well there\"",
                    "url": "https://www.espncricinfo.com/story/australia-vs-pak-2nd-test-shafique-rues-pakistan-s-batting-collapse-as-a-batter-you-have-to-take-your-chances-1414432",
                    "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/373100/373138.6.jpg",
                    "publishedAt": "2023-12-27T12:26:34Z",
                    "content": "'How did that bowl me?' - the tale of Babar, Cummins, and a dream ball"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TOI Sports Desk",
                    "title": "Watch: Virat Kohli fulfills young fan's wish, gives him autograph on RCB jersey | Cricket News - Times of India - Times of India",
                    "description": "Cricket News: Every fan dreams of receiving a signed jersey from their favorite cricket star, and Virat Kohli made this wish come true for a young supporter before",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/watch-virat-kohli-fulfills-young-fans-wish-gives-him-autograph-on-rcb-jersey/articleshow/106323559.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106323536,width-1070,height-580,imgsize-72674,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T11:46:26Z",
                    "content": "India vs South Africa, 1st Test, Day 1: Statistical Highlights"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricket.one"
                    },
                    "author": "Ritam",
                    "title": "[Watch] Virat Kohli, Rahul 'Burn DRS' For Dean Elgar's Wicket With 'Foolish' Conviction - OneCricket",
                    "description": "Virat Kohli is known for being animated on the field, and his aggression has always been his USP ever since he made his debut in international cricket. However, sometimes things go south due to this, and one of them happened on Wednesday.",
                    "url": "https://cricket.one/match-hub/watch-virat-kohli-rahul-burn-drs-for-dean-elgars-wicket-with-foolish-conviction/658c032cac9d49e58646f632",
                    "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1703673698739_Work (5).jpg",
                    "publishedAt": "2023-12-27T10:57:48Z",
                    "content": "Virat Kohli on Day 2 of the 1st Test between IND vs SA (AP Photos)\r\nVirat Kohli is known for being animated on the field, and his aggression has always been his USP ever since he made his debut in in… [+958 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "BBC News"
                    },
                    "author": null,
                    "title": "New Zealand vs Bangladesh 1st T20I Highlights: Mahedi, Shoriful Star As Bangla Tigers Stun Kiwis | Cricket News - NDTV Sports",
                    "description": "New Zealand vs Bangladesh, 1st T20I Highlights: Bangladesh secured a stunning 5-wicket win in series opener.",
                    "url": "http://www.bbc.com/news/world-us-canada-39324587",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/va053qtg_bangladesh-vs-new-zealand-afp_625x300_27_December_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
                    "publishedAt": "2023-12-27T10:49:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Australia v Pakistan 2023-24 | Second Test | Day 2 - cricket.com.au",
                    "description": "Australia look to build on a decent start in the Boxing Day Test as day two takes place under sunny Melbourne skiesDownload our app: https://app.cricket.com....",
                    "url": "https://www.youtube.com/watch?v=_QYeTnGZvaE",
                    "urlToImage": "https://i.ytimg.com/vi/_QYeTnGZvaE/maxresdefault.jpg",
                    "publishedAt": "2023-12-27T10:30:09Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Barca Blaugranes"
                    },
                    "author": "Barca Blaugranes Staff",
                    "title": "Vitor Roque all smiles as he arrives in Barcelona to link up with Xavi’s side - Barca Blaugranes",
                    "description": "He’s here!",
                    "url": "https://www.barcablaugranes.com/2023/12/27/24016130/vitor-roque-all-smiles-as-he-arrives-in-barcelona-to-link-up-with-xavis-side",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/5uy-wiBS-VVig2y2UXZDsz_27OE=/0x0:4298x2250/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25187996/1644488445.jpg",
                    "publishedAt": "2023-12-27T10:07:51Z",
                    "content": "Barcelonas newest signing Vitor Roque has arrived in the city to complete his move to the club from Brazilian side Athletico Paranaense.\r\nThe teenager has flown in this week and looks absolutely thri… [+613 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "International Cricket Council"
                    },
                    "author": "ICC",
                    "title": "World Cup 2023 smashes broadcast and digital records - ICC Cricket",
                    "description": "The Men's Cricket World Cup 2023 in India was the biggest-ever ICC event, breaking records on broadcast and digital.",
                    "url": "https://www.icc-cricket.com/news/3831906",
                    "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/12/22/ef5c1dc6-588e-4468-8f8a-2aead6d0f2be/GettyImages-1805244149.jpg",
                    "publishedAt": "2023-12-27T10:03:38Z",
                    "content": "The Men's Cricket World Cup 2023 in India was the biggest-ever ICC event, breaking records on broadcast and digital.The ICC Men's Cricket World Cup 2023 breached the 1 trillion barrier for total view… [+3842 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Cricket.one"
                    },
                    "author": "Ritam",
                    "title": "[Watch] Mohammed Siraj Takes Aiden Markam Into Pieces With An 'Absolute Jaffa' - OneCricket",
                    "description": "Mohammed Siraj set up Aiden Markram brilliantly before taking his wicket on Wednesday (December 27) during Day 2 of the first Test match between India and South Africa, taking place at SuperSport Park, Centurion.",
                    "url": "https://cricket.one/match-hub/watch-mohammed-siraj-takes-aiden-markam-into-pieces-with-an-absolute-jaffa/658bf55dac9d49e586444c42",
                    "urlToImage": "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1703671582714_Work (4).jpg",
                    "publishedAt": "2023-12-27T09:58:53Z",
                    "content": "Indian team celebrating Markram's wicket (AP Photos)\r\nMohammed Siraj set up Aiden Markram brilliantly before taking his wicket on Wednesday (December 27) during Day 2 of the first Test match between … [+1118 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NDTV News"
                    },
                    "author": null,
                    "title": "\"Life Is Unfair\": Michael Schumacher's Brother Gives Update On F1 Legend - NDTV",
                    "description": "Ralf Schumacher said that \"nothing is like it used to be\" since the driving legend's crash.",
                    "url": "https://www.ndtv.com/feature/life-is-unfair-michael-schumachers-brother-gives-update-on-f1-legend-4751129",
                    "urlToImage": "https://c.ndtvimg.com/2023-12/5pi1na4g_ralf-schumacher-michael-schumacher-afp_625x300_27_December_23.jpeg?ver-20231203.06",
                    "publishedAt": "2023-12-27T09:50:52Z",
                    "content": "Ralf Schumacher with brother and F1 legend Michael Schumacher.\r\nMichael Schumacher's brother Ralf has said that the Formula One legend's ski accident \"changed our family\". Speaking to German magazine… [+1962 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SB Nation"
                    },
                    "author": "David Pasztor",
                    "title": "Chelsea fans’ preferred lineup against Crystal Palace: Nkunku to start, Maatsen, too! - We Ain't Got No History",
                    "description": "Chelsea vs. Crystal Palace, Premier League:",
                    "url": "https://weaintgotnohistory.sbnation.com/2023/12/27/24016114/chelsea-fans-preferred-lineup-against-crystal-palace-nkunku-to-start-maatsen-too",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/6LV4phMMGUidsw98c5pQjJ5FOUQ=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25187968/1879801144.jpg",
                    "publishedAt": "2023-12-27T08:57:47Z",
                    "content": "Much like for the head coach himself,while we might want to substitute this entire bunch after yet another tragic performance, were limited by injuries, suspensions, and just the practical matter of … [+1109 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT News Desk",
                    "title": "Rahul Gandhi, after meeting wrestlers, has 'only one question' on WFI row - Hindustan Times",
                    "description": "Congress leader Rahul Gandhi made an \"impromptu\" visit to an 'akhara' in Haryana's Jhajjar district and met a group of wrestlers including Bajrang Punia. | Latest News India",
                    "url": "https://www.hindustantimes.com/india-news/rahul-gandhi-after-meeting-wrestlers-has-only-one-question-on-wfi-row-101703664775334.html",
                    "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/27/1600x900/congress_rahul_gandhi_wrestlers_bajrang_punia_1703666233771_1703666233976.jpg",
                    "publishedAt": "2023-12-27T08:44:46Z",
                    "content": "Hours after meeting Olympic bronze medallist Bajrang Punia and other wrestlers at Jhajjar in Haryana, Congress leader Rahul Gandhi on Wednesday raked up the issue around the embattled wrestling feder… [+2341 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "ANI",
                    "title": "Hardik Pandya likely to miss Afghanistan T20I series, will be fit before IPL: Sources - Times of India",
                    "description": "Cricket News: Indian all-rounder Hardik Pandya is likely to miss the T20I series against Afghanistan and the ICC T20 World Cup. Pandya sustained an ankle injury dur",
                    "url": "https://timesofindia.indiatimes.com/sports/cricket/news/hardik-pandya-likely-to-miss-afghanistan-t20i-series-will-be-fit-before-ipl-sources/articleshow/106316276.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106316269,width-1070,height-580,imgsize-52768,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T08:13:21Z",
                    "content": "India vs South Africa, 1st Test, Day 1: Statistical Highlights"
                }
            ]
        }
        setArticles(dataSports.articles)
        setLoading(false)
        props.setProgress(100);
      } else if(props.category==='technology'){
        let dataTechnology = {
            "status": "ok",
            "totalResults": 70,
            "articles": [
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Tech",
                    "title": "6 top affordable smartphones in 2023: Samsung, iQOO, Redmi to realme, here is a budget-friendly list - HT Tech",
                    "description": "Affordable smartphones in 2023: Explore the best-in-class smartphones offering a perfect blend of affordability and cutting-edge features. From powerful cameras to seamless performance, these budget-friendly devices deserve a second look.",
                    "url": "https://tech.hindustantimes.com/photos/6-top-affordable-smartphones-in-2023-samsung-iqoo-redmi-to-realme-here-is-a-budget-friendly-list-71703680824776.html",
                    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/27/1600x900/1_1703680874348_1703681263532.jpg",
                    "publishedAt": "2023-12-27T16:11:41Z",
                    "content": "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved."
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Rajarshi Acharya",
                    "title": "Unreleased Impaler SZ in GTA Online: Everything known so far - Sportskeeda",
                    "description": "GTA Online's latest Chop Shop DLC has added several new cars to the game, with more on the way.",
                    "url": "https://www.sportskeeda.com/gta/unreleased-impaler-sz-gta-online-everything-known-far",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/546fe-17036917863429-1920.jpg",
                    "publishedAt": "2023-12-27T16:10:00Z",
                    "content": "GTA Online's latest Chop Shop DLC has added several new cars to the game, with more on the way. One automobile expected to arrive in this patch is the Impaler SZ, which is part of the Chop Shop updat… [+2575 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "iQoo Neo 9 series smartphones with 144hz display, 120W fast charging launched in China - Times of India",
                    "description": "Vivo's sub-brand iQoo has expanded its product portfolio in China with the launch of the mid-range iQoo Neo 9 series, which includes the iQoo Neo 9 an",
                    "url": "https://timesofindia.indiatimes.com/gadgets-news/iqoo-neo-9-series-smartphones-with-144hz-display-120w-fast-charging-launched-in-china/articleshow/106328426.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106328445,width-1070,height-580,imgsize-8778,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T15:40:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Vivo X Fold 3 Pro: Vivo X Fold 3 Pro specs leaked, may launch with Vivo Pad 3 - Times of India",
                    "description": "Vivo is working on the Vivo X Fold 3 series, which includes the Vivo X Fold 3 and X Fold 3 Pro. The Vivo X Fold 3 Pro may debut with the Vivo Pad 3 an",
                    "url": "https://timesofindia.indiatimes.com/gadgets-news/vivo-x-fold-3-pro-specs-leaked-may-launch-with-vivo-pad-3/articleshow/106328329.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106328348,width-1070,height-580,imgsize-18276,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T15:33:25Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Livemint"
                    },
                    "author": "Affiliate Desk",
                    "title": "Best Garmin smartwatches under ₹90,000: 10 options to choose from | Mint - Mint",
                    "description": "Best Garmin smartwatches under  ₹90,000: With the top 10 finest models from Garmin smartwatch under 90000, discover the ideal fusion of attractiveness and utility. These smartwatches offer heart-rate monitoring, activity tracking, app connectivity, and elegan…",
                    "url": "https://www.livemint.com/technology/gadgets/best-garmin-smartwatches-under-rs-90-000-10-options-to-choose-from-11703664781695.html",
                    "urlToImage": "https://www.livemint.com/lm-img/img/2023/12/27/1600x900/smartwatch_under_90000_1703666825524_1703666840254.jpg",
                    "publishedAt": "2023-12-27T15:18:55Z",
                    "content": "In the world of smartwatches, there are countless options available, each with its own unique set of features and price points. For those looking for a high-end smartwatch 90k from Garmin packed with… [+21069 chars]"
                },
                {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": "Engadget",
                    "title": "Engadget's Games of the Year 2023 - Engadget",
                    "description": "We’ve never tried to name the Game of the Year, but it’s become a tradition to get the whole team together to talk about our individual favorites. Here are...",
                    "url": "https://www.engadget.com/engadgets-games-of-the-year-2023-150053925.html",
                    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/4ktaQiJMbSVQzFbEFMjZBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/74b13900-a00b-11ee-9bef-c1c73ded94c8",
                    "publishedAt": "2023-12-27T15:00:53Z",
                    "content": "Its been a terrible year for game developers, but an amazing year for games. 2023 kicked off with a fantastic remake of Dead Space and the breakout success that was Pizza Tower, and by the end of the… [+36463 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Bdtechtalks.com"
                    },
                    "author": "Ben Dickson",
                    "title": "Apple research paper hints at LLMs on iPhones and Macs - TechTalks",
                    "description": "A new technique by Apple researchers enables edge devices to run LLMs that are too large to load on DRAM by dynamically loading them from flash memory.",
                    "url": "https://bdtechtalks.com/2023/12/27/apple-llm-flash-research/",
                    "urlToImage": "https://i0.wp.com/bdtechtalks.com/wp-content/uploads/2023/12/apple-computer-chip.jpg?fit=1440%2C900&ssl=1",
                    "publishedAt": "2023-12-27T14:00:00Z",
                    "content": "This article is part of our coverage of the latest in AI research.\r\nApple has been late to the game on large language models (LLM) but is making interesting moves lately. The companys researchers rec… [+6712 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Essentially Sports"
                    },
                    "author": "Arpita Shrivastava",
                    "title": "3x Mr. Olympia Legend Confesses He Was Forced to Leave Gold's Gym Due to Arnold Schwarzenegger: “It Was All About Him” - EssentiallySports",
                    "description": "The bodybuilding's god of aesthetics Frank Zane revealed why he left the mecca of bodybuilding Gold's Gym during the peak of his career.",
                    "url": "https://www.essentiallysports.com/bodybuildng-news-three-x-mr-olympia-frank-zane-legend-was-forced-to-leave-golds-gym-due-to-arnold-schwarzenegger-it-was-all-about-him/",
                    "urlToImage": "https://image-cdn.essentiallysports.com/wp-content/uploads/WhatsApp-Image-2022-12-11-at-10.34.20-AM.jpeg",
                    "publishedAt": "2023-12-27T13:50:00Z",
                    "content": "During the golden era of bodybuilding, Golds Gym in Venice Beach was renowned as the Mecca for bodybuilders. From Arnold Schwarzenegger to Frank Zane, many legendary bodybuilders used to train there.… [+3310 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Jagran.com"
                    },
                    "author": "Anamika Singh",
                    "title": "Best Smart TV In India For 2024 - Jagran English",
                    "description": "Are You looking for the best TVs in India with smart features but confused about what brands and specifications to consider? We have answers to your queries and confusion. Whether you're seeking a cinematic experience or seamless access to streaming services,…",
                    "url": "https://english.jagran.com/top-deals/electronics/television/best-smart-tv-in-india-10123278",
                    "urlToImage": "https://imgeng.jagran.com/images/2023/dec/best tv in India ci1703682238756.jpg",
                    "publishedAt": "2023-12-27T13:49:47Z",
                    "content": "Over the years, TVs have evolved significantly, transitioning from bulky displays to sleek, flat-panel designs with high-definition resolutions like Full HD and 4K. The advent of smart TVs has furthe… [+25171 chars]"
                },
                {
                    "source": {
                        "id": "the-times-of-india",
                        "name": "The Times of India"
                    },
                    "author": "TIMESOFINDIA.COM",
                    "title": "Rockstar hit with another cyberattack, leaked GTA 5 source code reveal cancelled DLC plans - Times of India",
                    "description": "Rockstar Games, the US-based gaming studio, experienced another cyber incident with a data breach. In this attack, cybercriminals leaked the full sour",
                    "url": "https://timesofindia.indiatimes.com/gadgets-news/rockstar-hit-with-another-cyberattack-leaked-gta-5-source-code-reveal-cancelled-dlc-plans/articleshow/106326401.cms",
                    "urlToImage": "https://static.toiimg.com/thumb/msid-106326358,width-1070,height-580,imgsize-49024,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
                    "publishedAt": "2023-12-27T13:33:38Z",
                    "content": "5G smartphones with 10GB or more RAM under Rs 25,000"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBCTV18"
                    },
                    "author": "Vijay Anand",
                    "title": "This four-year-old startup plans to take Indian cloud gaming sky-high - CNBCTV18",
                    "description": "OnePlay, a 4-year-old Indian startup, aims to tap into the yet-unexplored cloud gaming market here. Founded in 2019, it offers affordable subscription plans allowing users to play PC games without high-end hardware. With $1.8 million in seed funding and over …",
                    "url": "https://www.cnbctv18.com/technology/this-four-year-old-startup-plans-to-take-indian-cloud-gaming-sky-high-18419861.htm",
                    "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2023/12/oneplay-1019x573.jpeg",
                    "publishedAt": "2023-12-27T12:42:13Z",
                    "content": "The global gaming industry is worth around $240 billion annually and the nascent cloud gaming market, touted as the future of gaming, according to Fortune Business Insights, was valued at $3.37 billi… [+6423 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "WION"
                    },
                    "author": "Vikrant Singh",
                    "title": "7 Cool Android Features You Should be Using - WION",
                    "description": "Want to get the maximum out of your phone? Here are seven cool features that might come in handy.",
                    "url": "https://www.wionews.com/web-stories/science-tech/7-cool-android-features-you-should-be-using-1703675282741",
                    "urlToImage": null,
                    "publishedAt": "2023-12-27T12:40:31Z",
                    "content": "This feature is for those who keep lending their phones to others. If you dont want to compromise your privacy, use app pinning. Open Settings, go to the Security &amp; Privacy menu, select More Secu… [+129 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hindustan Times"
                    },
                    "author": "HT Tech",
                    "title": "9 best laptops under 25000: Asus, HP to Lenovo, just check these productivity boosters out - HT Tech",
                    "description": "Check out the 9 best laptops under 25000 such as HP Chromebook 15A, ASUS VivoBook 15, HP Chromebook 14a, and more.",
                    "url": "https://tech.hindustantimes.com/laptops-pc/news/9-best-laptops-under-25000-asus-hp-to-lenovo-just-check-these-productivity-boosters-out-71703679007747.html",
                    "urlToImage": "https://images.hindustantimes.com/tech/img/2023/12/27/1600x900/asusss_1703679159559_1703679168061.png",
                    "publishedAt": "2023-12-27T12:32:49Z",
                    "content": "9 best laptops under 25000: When you are buying a laptop, what is the first thing you look for which fits your requirements? While many look for top processors and greater storage capacity, many cons… [+16413 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "YouTube"
                    },
                    "author": null,
                    "title": "Upcoming Smartphones in 2024: From Samsung Galaxy S24, Vivo X100, OnePlus 12 to Redmi Note 13 - Gadgets 360",
                    "description": "In this video, Neha Singh will talk about the upcoming smartphone launches lined up in the first half of 2024. The current line-up includes phones like the G...",
                    "url": "https://www.youtube.com/watch?v=Fizmrn0COuk",
                    "urlToImage": "https://i.ytimg.com/vi/Fizmrn0COuk/maxresdefault.jpg",
                    "publishedAt": "2023-12-27T12:30:15Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Gadgets360.com"
                    },
                    "author": "Nithya P Nair, Siddharth Suvarna",
                    "title": "Samsung Galaxy S24 Could Come With Snapdragon 8 Gen 3 SoC in the US and Canada - Gadgets 360",
                    "description": "Samsung's in-house Exynos 2400 chip is said to power the Galaxy S24 in every country other than the US, and Canada. The handset will run on a tweaked version of the Snapdragon 8 Gen 3 SoC called \"Snapdragon 8 Gen 3 SoC for Galaxy\" in the US and Canada regions.",
                    "url": "https://www.gadgets360.com/mobiles/news/samsung-s24-exynos-2400-snapdragon-8-gen-3-soc-us-canada-specifications-leak-galaxy-4751940",
                    "urlToImage": "https://i.gadgets360cdn.com/large/galaxy_s3_samsung_facebook_lime_green_1694768246200.jpg",
                    "publishedAt": "2023-12-27T12:28:38Z",
                    "content": "Samsung seems to be gearing up to unveil its next flagship smartphones Galaxy S24, Galaxy S24+, and Galaxy S24 Ultra on January 17. Early leaks suggested that the regular Galaxy S24 could use either … [+2172 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Sportskeeda"
                    },
                    "author": "Rajarshi Acharya",
                    "title": "Modders remaster GTA Vice City in GTA 4 RAGE engine - Sportskeeda",
                    "description": "A group of modders is allegedly remastering GTA Vice City in HD, using Grand Theft Auto 4.",
                    "url": "https://www.sportskeeda.com/gta/modders-remaster-gta-vice-city-gta-4-rage-engine",
                    "urlToImage": "https://staticg.sportskeeda.com/editor/2023/12/358ca-17036788478274-1920.jpg",
                    "publishedAt": "2023-12-27T12:22:00Z",
                    "content": "A group of modders is allegedly remastering GTA Vice City in HD, using Grand Theft Auto 4. This is not the first time such a project has occurred, but Take-Two, Rockstar's parent company, had taken d… [+3190 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "News18"
                    },
                    "author": "S Aadeetya",
                    "title": "India’s PUBG Rival Is Inviting People To Beta Test The Unreleased Game: What We Know - News18",
                    "description": "The made-in-India battle royale game looks to compete with the likes of BGMI in the gaming arena after it officially releases.",
                    "url": "https://www.news18.com/tech/indias-pubg-rival-is-inviting-people-to-beta-test-the-unreleased-game-what-we-know-8719361.html",
                    "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/12/internships-2023-12-a45bf3d31bace031dbdc73d2d6bfe0f7-16x9.jpeg?impolicy=website&width=1200&height=675",
                    "publishedAt": "2023-12-27T12:20:15Z",
                    "content": "The made-in-India battle royale game is inching closer to its official release. The game is finally ready to be tested by developers and select beta users. SuperGaming has started taking registration… [+1662 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Deccan Herald"
                    },
                    "author": "DH Web Desk",
                    "title": "Gmail app for iPhone gets 'unsubscribe' shortcut to manage bulk emails - Deccan Herald",
                    "description": null,
                    "url": "https://www.deccanherald.com/technology/gmail-app-for-iphone-gets-unsubscribe-shortcut-to-manage-bulk-emails-2826652",
                    "urlToImage": "https://images.deccanherald.com/deccanherald%2F2023-11%2Fd6367f59-12ee-4bd9-bea7-24369ed38ae3%2FGoogle_app.jpg?rect=0%2C40%2C1060%2C557&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop",
                    "publishedAt": "2023-12-27T12:06:19Z",
                    "content": "Google has redesigned the Gmail app for iOS which will allow users to block and prevent bulk emails from flooding the inbox.\r\nIn the latest update to the Gmail app for iOS, a new 'unsubscribe' option… [+906 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "India Today Tech",
                    "title": "iPhone 14 available at Rs 12,000 discount as part of Flipkart sale, check out the deal - India Today",
                    "description": "The iPhone 14 is currently on sale at a substantial discount on Flipkart, with additional savings for those trading in older models and HDFC Bank cardholders.",
                    "url": "https://www.indiatoday.in/technology/news/story/iphone-14-available-at-rs-12000-discount-as-part-of-flipkart-sale-check-out-the-deal-2481129-2023-12-27",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/iphone-14-new-phonejpg-224252-16x9.jpg?VersionId=pW2vp4nlrMPkzA8w3nYP7FVY6De7xwIA",
                    "publishedAt": "2023-12-27T11:46:42Z",
                    "content": "The iPhone 14 is currently available at a steal deal of Rs 58,000 for the 128 GB variant on Flipkart. Yes, you read it right. The 2022-launched iPhone is available at a discounted price as low as Rs … [+3239 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "India Today"
                    },
                    "author": "Divyanshi Sharma",
                    "title": "Trying to check your call history of last six months? Follow these simple steps - India Today",
                    "description": "You can easily access your call history of the last six months by following a few simple steps. Read on to know more.",
                    "url": "https://www.indiatoday.in/technology/tech-tips/story/trying-to-check-your-call-history-of-last-six-months-follow-these-simple-steps-2481126-2023-12-27",
                    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202312/iphone-272147956-16x9_0.jpg?VersionId=zeuEtb5mQY4KTok9O0hAaWvm3nPt3aSL",
                    "publishedAt": "2023-12-27T11:37:08Z",
                    "content": "In 2023, smartphones are the primary means of communication for a lot of people and most of our lives would come to a halt without them. In times when calls are such an integral part of our world, it… [+2475 chars]"
                }
            ]
        }
        setArticles(dataTechnology.articles)
        setLoading(false)
        props.setProgress(100);
      }
    }
    useEffect(() => {
      const token = localStorage.getItem('token');
      if(!token){
        Navigate("/login");
      }
      updateNews();
    },[]) 
    return (
      <>
      <NewsNav category={props.category}/>
          <h1 className="text-center my-3">Prep-GK - Top {props.category} headlines</h1>            
          {loading && <Spinner/>}
            <div className="container">
            <div className="row">
              {articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                    <NewsComponent title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} newsUrl={element.url} source={element.source.name} date={element.publishedAt.slice(0,10)}/> 
                      </div>
            })}
            </div>
            </div>
          </>
    )
  }
News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}

News.defaultProps ={
  country : "in",
  pageSize : 9,
  category : "general"
}

export default News
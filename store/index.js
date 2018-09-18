import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      currentWorkIndex: 0,
      currentImage: 0,
      socialList: [
        {
          title: "Contact Me",
          url: "mailto:hello@tylermiller.is",
          icon: "icon_mail.svg"
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/tylermiller-design/",
          icon: "icon_linkedin.svg"
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/tylermiller.is/",
          icon: "icon_instagram.svg"
        },
        {
          title: "Medium",
          url: "https://medium.com/@tylermiller.is",
          icon: "icon_medium.svg"
        }
      ],
      myWork: [
        {
          title: "Frankly Native Apps",
          date: "August 2017",
          imageComponent: "franklyNativeAppsImage",
          titleComponent: "franklyNativeAppsTitle",
          hasStudy: false,
          currentImage: 0,
          imageList: [
            {
              title: 1,
              url: "work/nna/one.png",
              alt: "An example of how a partner home page experience could be formatted."
            },
            {
              title: 2,
              url: "work/nna/two.png",
              alt: "Seamless transitions between browsing and reading."
            },
            {
              title: 3,
              url: "work/nna/three.png",
              alt: "Media rich articles optimized for a mobile reading experience."
            }
          ]
        },
        {
          title: "Frankly TV App",
          date: "December 2016",
          imageComponent: "franklyTVAppImage",
          titleComponent: "franklyTVAppTitle",
          hasStudy: false,
          studyUrl: '',
          currentImage: 0,
          imageList: [
            {
              title: 1,
              url: "work/tvapp/one.png",
              alt: "Welcome experience for our TV application"
            },
            {
              title: 2,
              url: "work/tvapp/two.png",
              alt: "The "
            }
          ]
        },
        {
          title: "Uniqlo Store Experience",
          date: "July 2016",
          imageComponent: "franklyUniqloImage",
          titleComponent: "franklyUniqloTitle",
          hasStudy: false,
          studyUrl: '',
          currentImage: 0,
          imageList: [
            {
              title: 1,
              url: "work/uniqlo/one.png",
              alt: "Tablet displays throughout the stores would allow people to browse, order and checkout on their own."
            },
            {
              title: 2,
              url: "work/uniqlo/two.png",
              alt: "By scanning an item the customer can check out or talk to Qlo, an AI chatbot. "
            },
            {
              title: 3,
              url: "work/uniqlo/three.png",
              alt: "Qlo is able to place orders, make recommendations and search for products in stores on the customers behalf."
            }
          ]
        },
        {
          title: "Welldone Android App",
          date: "April 2015",
          imageComponent: "welldoneTrackerImage",
          titleComponent: "welldoneTrackerTitle",
          hasStudy: false,
          studyUrl: '',
          currentImage: 0,
          imageList: [
            {
              title: 1,
              url: "work/welldone/one.png",
              alt: "The pump report page shows various metrics to give engineers a top-down view of the pump."
            },
            {
              title: 2,
              url: "work/welldone/two.png",
              alt: "Pump reports are filed by engineers to track changes in behavior, modifications, and fixes."
            },
            {
              title: 3,
              url: "work/welldone/three.png",
              alt: "The initial experience is focused around time-sensitive reports and changes in pump status."
            },
            {
              title: 4,
              url: "work/welldone/four.png",
              alt: "Seeing and downloading maps is crucial in Africa, where there is a lack of consistent energy and signal."
            },
            {
              title: 5,
              url: "work/welldone/five.png",
              alt: "Engineers can create routes between pumps, claiming them to signal to other engineers which pumps are already being looked at."
            }
          ]
        }
      ],
    }
  })
}

export default createStore
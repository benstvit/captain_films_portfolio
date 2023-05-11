const query = `{
  blogPostPhotoCollection(order: articleId_DESC) {
    items {
      articleId
      title
      thumbnail {
        title
        url
      }
      photoCredits
      date
      location {
        lat
        lon
      }
      introduction
      question1
      paragraph1
      question2
      paragraph2
      question3
      paragraph3
      question4
      paragraph4
      imagesCollection {
        items {
          title
          url
          width
          height
        }
      }
    }
  }
}`

export default query;

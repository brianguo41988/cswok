async function replySubmit(number){
    console.log(number);
}

const result = await axios({
    method: 'post',
    url: 'https://cswok.herokuapp.com/menu',
    withCredentials: true,
    data: {
      "name": "number",
      "price": 8
    },
  });
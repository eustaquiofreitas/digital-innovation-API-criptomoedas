let apiKey = {
  key: "fa08b41e-1bcb-451b-9fef-4539895ce933",
};

fetch(
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=" +
    apiKey.key
)
  .then((response) => {
    if (!response.ok)
      throw new Error(
        "Error ao executar a requesição, status" + response.status
      );
    return response.json();
  })
  .then((api) => {
    let text = "";
    for (let index = 0; index < 10; index++) {
      text =
        text +
        `
      <div class="media align-items-center d-flex border my-3">
      <img
        src="coin.jpeg" class="align-self-center " alt="coin"  width="100" height='100%' />
      <div class="media-body border w-100">
          <h5 class="m-2 text-primary">${api.data[index].name}</h5>
          <p class="mx-4">
            <small>${api.data[index].symbol}</small> </br>
            <small>${api.data[index].last_historical_data}</small> </br>
            <small>${api.data[index].slug}</small>
          </p>
      </div>
    </div>
      
      `;
      document.getElementById("coin").innerHTML = text;

      console.log(api.data);
    }
  })
  .catch((err) => {
    console.log(err.message);
  });

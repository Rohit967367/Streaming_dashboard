async function GetToken() {
  const response = await fetch("/api/get-token", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error({ message: "Something went wrong" });
  }

  return result;
}

async function GetURL(token) {
  const data = {
    name: "LiveStream",
    record: true,
  };

  const url = `${process.env.NEXT_APP_VIDEOSDK_URL}/v1/livestreams`;
  var options = {
    method: "POST",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    const JsonResp = await response.json();
    return JsonResp;
  } catch (error) {
    ///Alert
    console.log(error);
  }
}

export { GetToken, GetURL };

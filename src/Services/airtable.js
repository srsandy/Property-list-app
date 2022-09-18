const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const URL = "https://api.airtable.com/v0/apph66waIvj2JqYFT/Table%202";

const headers = () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${API_KEY}`);
  myHeaders.append("Content-Type", "application/json");
  return myHeaders;
};

export const fetchRecords = async () => {
  const res = await fetch(URL, {
    method: "GET",
    headers: headers(),
  });

  const { records } = await res.json();
  return records.map((ele) => ({ ...ele.fields, id: ele.id }));
};

export const createRecord = async (formInputs) => {
  const res = await fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      records: [
        {
          fields: formInputs,
        },
      ],
    }),
  });
  return await res.json();
};

export const deleteRecord = async (idx) => {
  const res = await fetch(`${URL}?records[]=${idx}`, {
    method: "DELETE",
    headers: headers(),
  });
  return await res.json();
};

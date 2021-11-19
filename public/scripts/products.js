const setProvider = () => {
  const selectedProvider = document.querySelector("#provider_name").innerHTML;
  const providerForm = document.querySelector("#provider");
  providerForm.value = selectedProvider;
};

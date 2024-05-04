async function consultarCep() {
    const cep = document.getElementById('cepInput').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.erro) {
        document.getElementById('cepResult').textContent = 'CEP não encontrado.';
      } else {
        document.getElementById('cepResult').textContent = `CEP: ${data.cep} - ${data.localidade}/${data.uf}`;
      }
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
    }
  }

  async function consultarClima() {
    const cidade = document.getElementById('cidadeInput').value;
    const pais = document.getElementById('paisInput').value;
    const apiKey = '0ad19ddf220485856afe18b5895e55de';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}&lang=pt_br`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === '404') {
        document.getElementById('climaResult').textContent = 'Cidade não encontrada.';
      } else {
        const temperatura = Math.round(data.main.temp - 273.15);
        const descricao = data.weather[0].description;
        document.getElementById('climaResult').textContent = `Clima em ${cidade}: ${temperatura}°C, ${descricao}.`;
      }
    } catch (error) {
      console.error('Erro ao consultar clima:', error);
    }
  }


const initialize = () => {
    const { ethereum } = window
    
    console.log(ethereum.isMetaMask)
    
    const targetButton = document.getElementById('connectButton')
    targetButton.addEventListener('click', onClickConnect)

    const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };

    const onboarding = new MetaMaskOnboarding({ forwarderOrigin });
    
    const onClickConnect = async () => {
        try {
          // Will open the MetaMask UI
          // You should disable this button while the request is pending!
          await ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
          console.error(error);
        }
    };
}

window.addEventListener('DOMContentLoaded', initialize)
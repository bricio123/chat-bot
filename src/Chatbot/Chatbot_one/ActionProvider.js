class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    //função que responde com uma imagem com o link do dialer
   handleMessageLinkDialer = () => {
      const messages = this.createChatBotMessage("Aqui está o link do Dialer.", {
        widget: "LinkDialer",
        withAvatar: true,
      });
      this.addMessageToBotState(messages);
    }; 
  
    handleMessageHeadseat = () => {
      const messages = this.createChatBotMessage(
        "Se o audio e o microfone não estiverem funcionando, veja as configuraçãos a seguir:",
        {
          widget: "headseat",
          withAvatar: true,
        }
      );
  
      this.addMessageToBotState(messages);
    };
  
    handleDefault = () => {
      const messages = this.createChatBotMessage("Não entendi", {
        withAvatar: true,
      });
  
      this.addMessageToBotState(messages);
    };
  
    addMessageToBotState = (messages) => {
      if (Array.isArray(messages)) {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, ...messages],
        }));
      } else {
        this.setState((state) => ({
          ...state,
          messages: [...state.messages, messages],
        }));
      }
    };
  
   
  
  }
  
  export default ActionProvider;
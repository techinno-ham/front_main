import mainApi from "@/src/infrastructures/http-client-main"
import { API } from "../constanst/api"
import axios from "axios"
import withoutTokenApi from "@/src/infrastructures/http-client-without-token"
import { parseCookies } from "nookies"

class Services {
    checkToken = async () => {
        try {
            const response = await mainApi.get(API.CHECK_TOKEN)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "check token failed",
            )
        }
    }

    checkTokenWithCookie = async (token: string | undefined) => {
        try {
            const response = await withoutTokenApi.get(API.CHECK_TOKEN, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return response
        } catch (error: any) {
            return false
            // return true
            throw new Error(
                error.response?.data?.message || "check token failed",
            )
        }
    }
    checkNumberBots = async (token: string | undefined) => {
        try {
            const response = await withoutTokenApi.get(API.My_BOTS_COUNT, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log({botCount: response.data});
            return response.data
        } catch (error: any) {
            // return false
            // return true
            throw new Error(
                error.response?.data?.message || "check token failed",
            )
        }
    }

    fetchLink = async (url: string) => {
        try {
            const response = await mainApi.get(API.FETCH_LINKS, {
                params: {
                    url,
                },
            })
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "fetch links failed",
            )
        }
    }

    fetchLinkDemo = async (url: string) => {
        try {
            const response = await mainApi.get(API.FETCH_LINKS_Demo, {
                params: {
                    url,
                },
            })
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "fetch links failed",
            )
        }
    }

    cretaeBots = async (body: any) => {
        try {
            const response = await mainApi.post(API.CREATE_BOT, body)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "create Bots failed",
            )
        }
    }
    updateUser = async (body: any) => {
        try {
            const response = await mainApi.post(API.UPDATE_PROFILE, body)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update profile failed",
            )
        }
    }
    updateUserImage = async (body: any) => {
        try {
            const response = await mainApi.post(API.UPDATE_PROFILE_IMAGE, body)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update profile failed",
            )
        }
    }
    updateDataSource = async (body: any, botId: string) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_DATASOURCE}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update dataSource failed",
            )
        }
    }
    updateDataSourceQa = async (body: any, botId: string) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_DATASOURCE_QA}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update dataSourceQa failed",
            )
        }
    }
    updateGeneralConfig = async (botId: string, body: any) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_GENERAL}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update general failed",
            )
        }
    }
    updateModelConfig = async (botId: string, body: any) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_MODEL}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update general failed",
            )
        }
    }
    updateUiConfig = async (botId: string, body: any) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_UI}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update general failed",
            )
        }
    }
    updateSecurityConfig = async (botId: string, body: any) => {
        try {
            const response = await mainApi.post(
                `${API.UPDATE_SECURITY}/${botId}`,
                body,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "update general failed",
            )
        }
    }
    myBoysList = async (params: any) => {
        try {
            const response = await mainApi.get(API.My_BOTS, {
                params: {
                    ...params,
                },
            })
            return response
        } catch (error: any) {
            console.log(error)
            throw new Error(error.response?.data?.message)
        }
    }
    deleteBot = async (botId: string) => {
        try {
            const response = await mainApi.delete(`${API.DELETE_BOTS}/${botId}`)
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "delete bot failed",
            )
        }
    }
    getBot = async (botId: string) => {
        try {
            const response = await mainApi.get(`${API.My_BOTS}/${botId}`)
            return response
        } catch (error: any) {
            throw new Error(error.response?.data?.message || "get bot failed")
        }
    }
    getDataSource = async (botId: string) => {
        try {
            const response = await mainApi.get(
                `${API.MY_DATASOURCE_WITH_ID}/${botId}`,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "get DataSource failed",
            )
        }
    }
    getConfigs = async (botId: string) => {
        try {
            const response = await mainApi.get(
                `${API.MY_CONFIGS_WITH_ID}/${botId}`,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "get configs failed",
            )
        }
    }
    getHistoryMessages = async (botId: string, filter?: string) => {
        try {
            const response = await mainApi.get(
                `/mybots/${botId}/conversations?filter=${filter}`,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "get history failed",
            )
        }
    }
    downloadHistoryMessages = async (botId: string, filter?: string) => {
        try {
            const response = await mainApi.get(
                `/mybots/${botId}/conversations/download`,
            )
            return response
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "download history failed",
            )
        }
    }
    getBotConversationById = async (botId: string, conversationId: string) => {
        try {
            const response = await mainApi.get(
                `/mybots/${botId}/conversations/${conversationId}`,
            );
            return response.data; // Return the response data directly
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "Failed to retrieve conversation"
            );
        }
    };
    
    sendOperatorMessage = async (body: { conversationId: string, message: string }) => {
        try {
            const response = await mainApi.post(API.SEND_OPERATOR_MESSAGE, body);
            return response;
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "Failed to send operator message"
            );
        }
    };
    
    fetchLiveConversationHistory = async (body: { botId: string, conversationId: string }) => {
        try {
            const response = await mainApi.post(API.FETCH_LIVE_CONVERSATION_HISTORY, body);
            return response;
        } catch (error: any) {
            throw new Error(
                error.response?.data?.message || "Failed to fetch conversation history"
            );
        }
    };
    fetchLiveConversationsByBotId = async (
        botId: string, 
      ) => {
        try {
          const response = await mainApi.post(API.FETCH_BOT_LIVE_CONVERSATIONS_IDS, { botId });
          return response.data;  // Return the response data directly
        } catch (error: any) {
          throw new Error(
            error.response?.data?.message || "Failed to fetch live conversations"
          );
        }
      };
}

export default new Services()

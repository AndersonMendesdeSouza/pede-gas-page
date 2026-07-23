import { AppVersionResponseDto } from "../dtos/app-version-response.dto";
import api from "./api";

export const AppVersionService = {
  find: async (): Promise<AppVersionResponseDto[]> => {
    const response = await api.get<AppVersionResponseDto[]>(
      "/app-version",
    );
    return response.data;
  },
};

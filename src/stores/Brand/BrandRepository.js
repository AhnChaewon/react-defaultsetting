import { SERVER } from "config/server.json";
import axios from "axios";

class BrandRepository {
    async handleBrandSites(request) {
        try {
            const { data } = await axios.put(
                '${SERVER}site.api',request
            );
        } catch (error) {
            throw error;
        }
    }
}
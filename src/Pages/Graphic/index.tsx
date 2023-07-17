import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryPie,
  VictoryTheme,
  VictoryTooltip,
} from "victory-native";
import { database, fetchData } from "../../data/user-data";
import { Relatorio } from "../../types/user";
import { Ionicons } from "@expo/vector-icons";

function Graphic() {
  const [selectedValue, setSelectedValue] = useState("Janeiro");
  const [reportType, setReportType] = useState("quantidade");
  const [filters, setFilters] = useState(false);
  const [filterDate, setFilterDate] = useState<Relatorio[]>([]);

  const handleMonthChange = (itemValue: string) => {
    setSelectedValue(itemValue);
  };

  useEffect(() => {
    const result = fetchData();
    const filteredData = result.find((item) => item.mes == selectedValue);
    if (filteredData) {
      setFilterDate(filteredData.relatorio);
    }
  }, [selectedValue]);

  return (
    <View>
      {filters && (
        <View style={style.container}>
          <View style={style.pickerView}>
            <Text>Mês:</Text>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => handleMonthChange(itemValue)}
              style={{
                fontSize: 18,
                width: 200,
              }}
            >
              {database.map((item) => (
                <Picker.Item
                  style={{ fontSize: 12 }}
                  key={item.id}
                  label={item.mes}
                  value={item.mes}
                />
              ))}
            </Picker>
          </View>
          <View></View>
          <View style={style.pickerView}>
            <Text>Tipo:</Text>
            <Picker
              selectedValue={reportType}
              onValueChange={(itemValue) => setReportType(itemValue)}
              style={{
                width: 200,
              }}
            >
              <Picker.Item
                style={{ fontSize: 12 }}
                label="Quantidade"
                value="quantidade"
              />
              <Picker.Item
                style={{ fontSize: 12 }}
                label="Valor Total"
                value="totalVendido"
              />
            </Picker>
          </View>
        </View>
      )}
      <View>
        <TouchableOpacity
          style={style.button}
          onPress={() => setFilters(!filters)}
        >
          <Text>{filters ? "Fechar Filtros" : "Exibir Filtros"}</Text>
          <Ionicons
            name={filters ? "arrow-up" : "arrow-down"}
            size={26}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={style.scrollViewStyle}>
        <View style={style.chartStyle}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: -25,
            }}
          >
            <Text>{`Grafico referente a ${selectedValue}`}</Text>
          </View>
          <VictoryChart
            height={250}
            animate={{
              duration: 1000,
              onLoad: { duration: 500 },
            }}
            style={{
              parent: {
                border: "5px solid #ccc",
              },
            }}
            theme={VictoryTheme.material}
            domainPadding={20}
          >
            <VictoryBar
              style={{
                data: { fill: "#0F2650", stroke: "black", strokeWidth: 2 },
              }}
              data={filterDate}
              x="semana"
              y={reportType}
            />
          </VictoryChart>
        </View>
        <View style={style.pieStyle}>
          <VictoryPie
            width={170}
            height={170}
            animate={{
              duration: 2000,
            }}
            innerRadius={70}
            labelComponent={<VictoryTooltip renderInPortal={false} />}
            colorScale={["#5FA4CE", "#E19785", "#F3DE75", "#9EF7F1"]}
            data={filterDate}
            x="semana"
            y={reportType}
          />
          {filterDate.length > 0 && (
            <View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 2,
                    height: 40,
                    backgroundColor: "#5FA4CE",
                    marginRight: 5,
                    marginBottom: 3,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 10 }}>{filterDate[0].semana}</Text>
                  <Text style={{ fontSize: 8 }}>
                    Quantidade: {filterDate[0].quantidade} unidades
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Valor Total: R$ {filterDate[0].totalVendido}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 2,
                    height: 40,
                    backgroundColor: "#E19785",
                    marginRight: 5,
                    marginBottom: 3,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 10 }}>{filterDate[1].semana}</Text>
                  <Text style={{ fontSize: 8 }}>
                    Quantidade: {filterDate[1].quantidade} unidades
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Valor Total: R$ {filterDate[1].totalVendido}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 2,
                    height: 40,
                    backgroundColor: "#F3DE75",
                    marginRight: 5,
                    marginBottom: 3,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 10 }}>{filterDate[2].semana}</Text>
                  <Text style={{ fontSize: 8 }}>
                    Quantidade: {filterDate[2].quantidade} unidades
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Valor Total: R$ {filterDate[0].totalVendido}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 2,
                    height: 40,
                    backgroundColor: "#9EF7F1",
                    marginRight: 5,
                    marginBottom: 3,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 10 }}>{filterDate[3].semana}</Text>
                  <Text style={{ fontSize: 8 }}>
                    Quantidade: {filterDate[3].quantidade} unidades
                  </Text>
                  <Text style={{ fontSize: 8 }}>
                    Valor Total: R$ {filterDate[0].totalVendido}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingLeft: "5%",
    backgroundColor: "white",
  },
  pickerView: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1E86E0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: -20,
  },
  scrollViewStyle: {
    paddingLeft: "5%",
    paddingEnd: "5%",
    marginTop: 20,
  },
  chartStyle: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginTop: 20,
    marginBottom: 20,
    height: 250,
  },
  pieStyle: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 150,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 200,
  },
});

export default Graphic;

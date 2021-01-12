package dash.utils;

import com.dragonsoftbravo.libs.PssDateUtils;
import com.dragonsoftbravo.libs.PssDateWrapper;
import dash.dto.PieMap;
import com.google.common.collect.Lists;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang3.time.DateUtils;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

public class MapUtils {

  public static Date all= PssDateUtils.parse("2000-01-01","yyyy-mm-dd");

 /* public static Date month = PssDateWrapper.instance(new Date()).toMonthBegin().toDate();*/

  public static Date month = PssDateWrapper.instance(PssDateUtils.parse("2020-11-01","yyyy-mm-dd")).toMonthBegin().toDate();

  public static List<PieMap> makePie(List<Object[]> list) {
    List<PieMap> result = Lists.newArrayList();
    list.forEach(
            s -> {
              if (s[0] != null) {
                PieMap vo = new PieMap();
                vo.setName(s[0]);
                vo.setValue(s[1]);
                result.add(vo);
              }
            });
    return result;
  }

  public static List<PieMap> makeProvince(List<Object[]> list) {
    List<PieMap> result = Lists.newArrayList();
    list.forEach(
        s -> {
          if (s[0] != null) {
            PieMap vo = new PieMap();
            vo.setName(
                StringUtils.contains(s[0].toString(), "省")
                    ? s[0].toString().substring(0, s[0].toString().length() - 1)
                    : s[0].toString());
            vo.setValue(s[1]);
            result.add(vo);
          }
        });
    return result;
  }

  public static List<Object> makeMonth(List<Object> list) {
    return list.stream()
        .map(
            s ->
                StringUtils.equals(s.toString().substring(5, 6), "0")
                    ? s.toString().substring(6, 7) + "月"
                    : s.toString().substring(5, 7) + "月")
        .collect(Collectors.toList());
  }

  public static Map<String, List<Object>> makeTwelve(Map<String, List<Object>> map) {
    List<Object> x =map.get("x"), y = map.get("y");
    if (x.size() > 12) {
      x = x.subList(x.size()-12,x.size());
      y = y.subList(y.size()-12,y.size());
      map.put("x",x);
      map.put("y",y);
    }
    return map;
  }

  public static Map<String, List<Object>> makeMap(List<Object[]> list) {

    Map<String, List<Object>> map = new HashMap<>();
    List<Object> x = Lists.newArrayList(), y = Lists.newArrayList();
    List<Object> finalX = x, finalY = y;
    list.forEach(
        s -> {
          finalX.add(s[0]);
          finalY.add(s[1]);
        });
    Collections.reverse(x);
    Collections.reverse(y);
    if (x.get(0).toString().contains("-")) {
      map.put("x", makeMonth(x));
    } else {
      map.put("x", x);
    }
    map.put("y", y);
    return map;
  }

  public static Map<String, List<Object>> makeDayMap(List<Object[]> list) {
    Map<String, List<Object>> map = new HashMap<>();
    List<Object> x = Lists.newArrayList(), y = Lists.newArrayList();
    List<Object> finalX = x, finalY = y;
    list.forEach(
        s -> {
          finalX.add(s[0]);
          finalY.add(s[1]);
        });

    /*Collections.reverse(x);
    Collections.reverse(y);*/
    map.put("x", subDay(x));
    map.put("y", y);
    System.out.println(map);

    return makeDay(map);
  }

  public static void main(String[] args) {
    int year = PssDateUtils.getYear(new Date());
    int year1 = PssDateUtils.getYear(all);
    System.out.println(year+"-"+year1+"="+(year-year1));
  }

  public static Map<String, List<Object>> makeDay(Map<String, List<Object>> map) {
    List<Object> days = map.get("x"), count = map.get("y");
    List<Object> x = Lists.newArrayList(), y = Lists.newArrayList();
    Integer lengh = Integer.valueOf(new Date().toString().substring(8, 10));
    int n = 0;
    for (Integer i = Integer.valueOf(days.get(0).toString()); i > 0; i--) {
      Integer day = Integer.valueOf(days.get(n).toString());
      x.add(i);
      if (i == day && n < days.size()) {
        y.add(count.get(n));
        n++;
      } else {
        y.add(0);
      }
      if (n == days.size()) {
        n--;
      }
    }
    Collections.reverse(x);
    Collections.reverse(y);
    map.put("x", x);
    map.put("y", y);
    System.out.println(map);
    return map;
  }

  public static List<Object> subDay(List<Object> list) {

    return list.stream()
        .map(
            s ->
                StringUtils.equals(s.toString().substring(8, 9), "0")
                    ? s.toString().substring(9, 10)
                    : s.toString().substring(8, 10))
        .collect(Collectors.toList());
  }

  public static Map makeThousand(Map<String, List<Object>> map) {
    List<Object> list = map.get("y");
    BigDecimal m = new BigDecimal(10000);
    DecimalFormat f = new DecimalFormat("#.0");
    List<Object> collect =
        list.stream()
            .map(
                s -> {
                  BigDecimal divide = ((BigDecimal) s).divide(m, 4, RoundingMode.HALF_UP);
                  return f.format(divide);
                })
            .collect(Collectors.toList());
    map.put("y", collect);
    return map;
  }
}

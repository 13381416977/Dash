package dash.controller;

import dash.dto.PieMap;
import dash.model.Form;
import dash.repository.FormRepository;
import dash.utils.MapUtils;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
public class FormController {

  @Autowired private FormRepository formRepository;




 static  String dataSource[]={"FordFinance_H5","FordFinance","PUBLICS","LincolnFinance_H5","APPLETS","CAF","LincolnWay_H5","Lincoln_mall"};//8

  static String loanCategory[]={"2","3","4","5"};//4

  static String folStatus[]={"MAV_READY","*E","MAV","CVT","DEF","OSC","SUB",null};//8
    private static Date randomDate(String beginDate, String endDate) {
        try {
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
            Date start = format.parse(beginDate);// 构造开始日期
            Date end = format.parse(endDate);// 构造结束日期
            // getTime()表示返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。
            if (start.getTime() >= end.getTime()) {
                return null;
            }
            long date = random(start.getTime(), end.getTime());

            return new Date(date);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private static long random(long begin, long end) {
        long rtn = begin + (long) (Math.random() * (end - begin));
        // 如果返回的是开始时间和结束时间，则递归调用本函数查找随机值
        if (rtn == begin || rtn == end) {
            return random(begin, end);
        }
        return rtn;
    }


  public static void main(String[] args) {
    for (int i = 0; i < 100; i++) {
      System.out.println(randomDate("2020-11-01","2020-11-31"));
    }
  }
    @RequestMapping(
            value = "/data",
            method = {RequestMethod.GET})
    public String data() {
    for (int i = 0; i < 100; i++) {
        Form form=new Form();
        Random random=new Random();
        form.setId(UUID.randomUUID().toString());
        form.setCreateDate(randomDate("2020-12-01","2020-12-30"));
        form.setFolStatus(folStatus[random.nextInt(8)]);
        form.setDataSources(dataSource[random.nextInt(8)]);
        form.setPlanCategory(loanCategory[random.nextInt(4)]);
        System.out.println(form);
        formRepository.save(form);
      System.out.println(form.getId().substring(0,10)+" : "+form.getCreateDate());
    }
        return "ok: ";
    }
  @RequestMapping(
      value = "/mCount",
      method = {RequestMethod.GET})
  public Object mCount() {
      return MapUtils.makeTwelve(MapUtils.makeMap(formRepository.mCount()));

  }

  @RequestMapping(
      value = "/income",
      method = {RequestMethod.GET})
  public Object income() {
    return MapUtils.makeTwelve(MapUtils.makeThousand(MapUtils.makeMap(formRepository.income())));
  }

  @RequestMapping(
      value = "/status",
      method = {RequestMethod.GET})
  public Object status() {
    return MapUtils.makePie(formRepository.status());
  }

  @RequestMapping(
      value = "/province",
      method = {RequestMethod.GET})
  public Object province() {
      List<Object[]> province = formRepository.province();
    System.out.println(province);
      List<PieMap> list = MapUtils.makeProvince(province);
    System.out.println(list);
      return list;
  }

  @RequestMapping(
      value = "/process",
      method = {RequestMethod.GET})
  public Object process() {
    System.out.println(formRepository.process());
    return MapUtils.makeTwelve(MapUtils.makeMap(formRepository.process()));
  }



  @RequestMapping(value = "/list", method = RequestMethod.GET)
  public Object list() {
    List<String> x = Lists.newArrayList("旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业");
    List<Integer> y = Lists.newArrayList(200, formRepository.allCount(), 300, 900, 1400, 1200, 600);
    Map<String, List> map = new HashMap<>();
    map.put("x", x);
    map.put("y", y);
    return map;
  }

  @RequestMapping(value = "/lists", method = RequestMethod.GET)
  public Object lists() {
    List<String> x = Lists.newArrayList("MAT", "CVE", "*E", "SUB", "DEF", "READY", "NULL");
    List<Integer> y = Lists.newArrayList(112, 88, 73, 70, 140, 127, 67);
    Map<String, List> map = new HashMap<>();
    map.put("x", x.subList(0, 7));
    map.put("y", y.subList(0, 7));
    return map;
  }

}

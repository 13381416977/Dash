package dash.controller;

import com.google.common.collect.Lists;
import dash.utils.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import dash.service.CustomerService;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping(value = "customer", method = {RequestMethod.GET})
@RestController
public class CustomerController {

  @Autowired
  private CustomerService service;

  private Date date = MapUtils.all;


  @RequestMapping(value = "/marry")
  public Object marry() {
    return service.marry(date);
  }

  @RequestMapping(value = "/income")
  public Object income() {
    return service.income(date);
  }

  @RequestMapping(value = "/age")
  public Object age() {
  /*  Map<String, List<Object>> map = new HashMap<>();
    List<Object> x = Lists.newArrayList("18岁以下", "18-25岁", "25-30岁", "30-40岁", "40-50岁", "50-60岁", "60岁以上");
    List<Object> y = Lists.newArrayList(7, 34, 56, 72, 48, 26, 11);
    map.put("x", x);
    map.put("y", y);
    return map;*/

  return service.age(date);
  }

  @RequestMapping(value = "/house")
  public Object house() {
    return service.house(date);
  }

  @RequestMapping(value = "/job")
  public Object job() {
    Map<String, List<Object>> map = new HashMap<>();
    List<Object> x = Lists.newArrayList("普通职员", "专业人士", "工程师", "销售", "工人", "主管", "经理");
    List<Object> y = Lists.newArrayList(47, 88, 29, 71, 34, 21, 9, 17);
    map.put("x", x);
    map.put("y", y);
    return map;
  }

  @RequestMapping(value = "/sex")
  public Object sex() {
    return service.sex(date);
  }


}
